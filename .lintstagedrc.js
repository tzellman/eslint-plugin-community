const micromatch = require('micromatch');

module.exports = {
    '*.{yml,js,json,md,prettierrc}': (files) => {
        const match = micromatch.not(files, ['package.json', 'package-lock.json']);
        return [
            ...match.map((filename) => `prettier --config ./.prettierrc --write '${filename}'`),
            ...match.map((filename) => `git add '${filename}'`)
        ];
    }
};
