'use strict';

const rule = require('../lib/rules/no-x-list');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});

ruleTester.run('no-x-list', rule, {
    valid: ['var allowList = ["zelda", "link"]', 'var white = "fff"', 'let somelist = []'],

    invalid: [
        {
            code: 'var whitelist = []',
            errors: [{ messageId: 'avoidWhitelist' }]
        },
        {
            code: 'var whiteList = []',
            errors: [{ messageId: 'avoidWhitelist' }]
        },
        {
            code: 'var numberWhitelist = [1,2,3]',
            errors: [{ messageId: 'avoidWhitelist' }]
        },
        {
            code: 'var whitelisted = ["t", "z"]',
            errors: [{ messageId: 'avoidWhitelist' }]
        },
        {
            code: 'var white_listed = ["t", "z"]',
            errors: [{ messageId: 'avoidWhitelist' }]
        },
        {
            code: 'var white_list = [["t", "z"]]',
            errors: [{ messageId: 'avoidWhitelist' }]
        }
    ]
});

ruleTester.run('no-x-list', rule, {
    valid: ['var denyList = ["ganon", "ganondorf"]', 'var black = "000"', 'let somelist = []'],

    invalid: [
        {
            code: 'var blacklist = []',
            errors: [{ messageId: 'avoidBlacklist' }]
        },
        {
            code: 'var blackList = []',
            errors: [{ messageId: 'avoidBlacklist' }]
        },
        {
            code: 'var numberBlacklist = [1,2,3]',
            errors: [{ messageId: 'avoidBlacklist' }]
        },
        {
            code: 'var blacklisted = ["t", "z"]',
            errors: [{ messageId: 'avoidBlacklist' }]
        },
        {
            code: 'var black_listed = ["t", "z"]',
            errors: [{ messageId: 'avoidBlacklist' }]
        },
        {
            code: 'var black_list = [["t", "z"]]',
            errors: [{ messageId: 'avoidBlacklist' }]
        }
    ]
});

ruleTester.run('no-x-list', rule, {
    valid: ['var banList = ["ganon", "ganondorf"]', 'var black = "000"', 'let ball'],
    invalid: [
        {
            code: 'var blackballed = []',
            errors: [{ messageId: 'avoidBlackball' }]
        },
        {
            code: 'var blackBalled = []',
            errors: [{ messageId: 'avoidBlackball' }]
        },
        {
            code: 'var black_ball_list = [1,2,3]',
            errors: [{ messageId: 'avoidBlackball' }]
        },
        {
            code: 'var blackBall = ["t", "z"]',
            errors: [{ messageId: 'avoidBlackball' }]
        }
    ]
});
