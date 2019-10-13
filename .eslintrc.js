module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'script'
    },
    plugins: ['eslint-plugin', 'node', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'plugin:node/recommended',
        'plugin:prettier/recommended'
    ],
    env: {
        node: true
    },
    rules: {
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        strict: ['error', 'global'],
        'eslint-plugin/prefer-placeholders': 'error',
        'eslint-plugin/test-case-shorthand-strings': 'error',
        'node/no-unsupported-features': ['error', { version: 6 }],
        'prettier/prettier': 'error',
        'node/no-unpublished-require': [
            'error',
            {
                allowModules: ['eslint']
            }
        ]
    }
};
