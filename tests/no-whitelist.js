'use strict';

const rule = require('../lib/rules/no-whitelist');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});

ruleTester.run('no-whitelist', rule, {
    valid: ['var allowList = ["zelda", "link"]', 'var white = "000"', 'let somelist = []'],

    invalid: [
        {
            code: 'var whitelist = []',
            errors: [{ messageId: 'avoidName' }]
        },
        {
            code: 'var whiteList = []',
            errors: [{ messageId: 'avoidName' }]
        },
        {
            code: 'var numberWhitelist = [1,2,3]',
            errors: [{ messageId: 'avoidName' }]
        },
        {
            code: 'var whitelisted = ["t", "z"]',
            errors: [{ messageId: 'avoidName' }]
        },
        {
            code: 'var white_listed = ["t", "z"]',
            errors: [{ messageId: 'avoidName' }]
        },
        {
            code: 'var white_list = [["t", "z"]]',
            errors: [{ messageId: 'avoidName' }]
        }
    ]
});
