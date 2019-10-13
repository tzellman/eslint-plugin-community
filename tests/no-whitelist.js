'use strict';

const rule = require('../lib/rules/no-whitelist');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});

const message = 'Variable names should not contain "whitelist"';

ruleTester.run('no-whitelist', rule, {
    valid: ['var allowList = ["zelda", "link"]', 'var white = "000"'],

    invalid: [
        {
            code: 'var whitelist = []',
            errors: [{ message }]
        },
        {
            code: 'var whiteList = []',
            errors: [{ message }]
        },
        {
            code: 'var numberWhitelist = [1,2,3]',
            errors: [{ message }]
        },
        {
            code: 'var whitelisted = ["t", "z"]',
            errors: [{ message }]
        },
        {
            code: 'var white_listed = ["t", "z"]',
            errors: [{ message }]
        },
        {
            code: 'var white_list = [["t", "z"]]',
            errors: [{ message }]
        }
    ]
});
