# eslint-plugin-community

Rules that promote community and inclusiveness in code

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-community`:

```
$ npm install eslint-plugin-community --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-community` globally.

## Usage

Add `community` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["community"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "community/no-race-names": "warn"
    }
}
```

## Rules

| rule                             | description                                           | recommended | fixable  |
| -------------------------------- | ----------------------------------------------------- | ----------- | -------- |
| [`no-race-names`][no-race-names] | discourage using common terms that may relate to race | :warning:   | :wrench: |

**Key**

| icon       | description                                     |
| ---------- | ----------------------------------------------- |
| :bangbang: | Reports as error in recommended configuration   |
| :warning:  | Reports as warning in recommended configuration |
| :wrench:   | Rule is fixable with `eslint --fix`             |

[no-race-names]: docs/rules/no-race-names.md
