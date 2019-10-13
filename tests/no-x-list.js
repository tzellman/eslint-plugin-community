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
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allowlist = []'
        },
        {
            code: 'var whiteList = []',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allowList = []'
        },
        {
            code: 'var numberWhitelist = [1,2,3]',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var numberAllowlist = [1,2,3]'
        },
        {
            code: 'var whitelisted = ["t", "z"]',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allowlisted = ["t", "z"]'
        },
        {
            code: 'var white_listed = ["t", "z"]',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allow_listed = ["t", "z"]'
        },
        {
            code: 'var white_list = [["t", "z"]]',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allow_list = [["t", "z"]]'
        }
    ]
});

ruleTester.run('no-x-list', rule, {
    valid: ['var denyList = ["ganon", "ganondorf"]', 'var black = "000"', 'let somelist = []'],

    invalid: [
        {
            code: 'var blacklist = []',
            errors: [{ messageId: 'avoidBlacklist' }],
            output: 'var denylist = []'
        },
        {
            code: 'var blackList = []',
            errors: [{ messageId: 'avoidBlacklist' }],
            output: 'var denyList = []'
        },
        {
            code: 'var numberBlacklist = [1,2,3]',
            errors: [{ messageId: 'avoidBlacklist' }],
            output: 'var numberDenylist = [1,2,3]'
        },
        {
            code: 'var blacklisted = ["t", "z"]',
            errors: [{ messageId: 'avoidBlacklist' }],
            output: 'var denylisted = ["t", "z"]'
        },
        {
            code: 'var black_listed = ["t", "z"]',
            errors: [{ messageId: 'avoidBlacklist' }],
            output: 'var deny_listed = ["t", "z"]'
        },
        {
            code: 'var black_list = [["t", "z"]]',
            errors: [{ messageId: 'avoidBlacklist' }],
            output: 'var deny_list = [["t", "z"]]'
        }
    ]
});

ruleTester.run('no-x-list', rule, {
    valid: ['var banList = ["ganon", "ganondorf"]', 'var black = "000"', 'let ball'],
    invalid: [
        {
            code: 'var blackballed = []',
            errors: [{ messageId: 'avoidBlackball' }],
            output: 'var denyballed = []'
        },
        {
            code: 'var blackBalled = []',
            errors: [{ messageId: 'avoidBlackball' }],
            output: 'var denyBalled = []'
        },
        {
            code: 'var black_ball_list = [1,2,3]',
            errors: [{ messageId: 'avoidBlackball' }],
            output: 'var deny_ball_list = [1,2,3]'
        },
        {
            code: 'var blackBall = ["t", "z"]',
            errors: [{ messageId: 'avoidBlackball' }],
            output: 'var denyBall = ["t", "z"]'
        }
    ]
});
