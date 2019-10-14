'use strict';

const rule = require('../lib/rules/no-race-names');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});

ruleTester.run('no-race-names', rule, {
    valid: [
        'var allowList = ["zelda", "link"]',
        'var white = "fff"',
        'let somelist = []',
        'var denyList = ["ganon", "ganondorf"]',
        'var black = "000"',
        'var banList = ["ganon", "ganondorf"]',
        'var primary',
        'let replica',
        'let masterOfTheUniverse',
        'let slavesBandWebpage = "https://www.slavesband.com/"'
    ],

    invalid: [
        {
            code: 'var whitelist = [], a = []',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allowlist = [], a = []'
        },
        {
            code: 'var a = [], whitelist = []',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var a = [], allowlist = []'
        },
        {
            code: 'var whitelist, colorWhite, white',
            errors: [{ messageId: 'avoidWhitelist' }],
            output: 'var allowlist, colorWhite, white'
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
        },
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
        },
        {
            code: 'var blacklist, whitelist',
            errors: [{ messageId: 'avoidBlacklist' }, { messageId: 'avoidWhitelist' }],
            output: 'var denylist, allowlist'
        },
        {
            code: 'var master',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'var primary'
        },
        {
            code: 'var _master',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'var _primary'
        },
        {
            code: 'var masters = []',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'var primaries = []'
        },
        {
            code: 'let masterNode = "server1"',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primaryNode = "server1"'
        },
        {
            code: 'let masterServer = "server1"',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primaryServer = "server1"'
        },
        {
            code: 'let master_server = "server1"',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primary_server = "server1"'
        },
        {
            code: 'let masterServers = []',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primaryServers = []'
        },
        {
            code: 'let masterSets = []',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primarySets = []'
        },
        {
            code: 'let master_sets = []',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primary_sets = []'
        },
        {
            code: 'let master___clients = []',
            errors: [{ messageId: 'avoidMaster' }],
            output: 'let primary___clients = []'
        },
        {
            code: 'var slave',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replica'
        },
        {
            code: 'var __slave',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var __replica'
        },
        {
            code: 'var slaves = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replicas = []'
        },
        {
            code: 'var slaveNodes = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replicaNodes = []'
        },
        {
            code: 'var slaveSet = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replicaSet = []'
        },
        {
            code: 'var slave_set = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replica_set = []'
        },
        {
            code: 'var slaveServers = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replicaServers = []'
        },
        {
            code: 'var slave_Servers = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replica_Servers = []'
        },
        {
            code: 'var slaveServices = []',
            errors: [{ messageId: 'avoidSlave' }],
            output: 'var replicaServices = []'
        }
    ]
});
