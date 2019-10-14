'use strict';

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            recommended: true,
            category: 'Variables',
            description: 'discourage using common terms that may relate to race'
        },
        messages: {
            avoidWhitelist: 'Variable `{{ name }}` should not contain `whitelist`',
            avoidBlacklist: 'Variable `{{ name }}` should not contain `blacklist`',
            avoidMaster: 'Variable `{{ name }}` should not be `master`',
            avoidSlave: 'Variable `{{ name }}` should not be `slave`'
        },
        fixable: 'code'
    },
    create(context) {
        const sourceCode = context.getSourceCode();
        return {
            Identifier: (node) => {
                const token = sourceCode.getFirstToken(node);
                let match = /(white)_*list/i.exec(node.name);
                if (match) {
                    const matchOffset = token.start + match.index;
                    context.report({
                        node,
                        messageId: 'avoidWhitelist',
                        data: { name: node.name },
                        fix: ({ replaceTextRange }) => {
                            return replaceTextRange(
                                [matchOffset, matchOffset + match[1].length],
                                `${match[1][0] === 'W' ? 'A' : 'a'}llow`
                            );
                        }
                    });
                }
                match = /(black)_*list/i.exec(node.name);
                if (match) {
                    const matchOffset = token.start + match.index;
                    context.report({
                        node,
                        messageId: 'avoidBlacklist',
                        data: { name: node.name },
                        fix: ({ replaceTextRange }) => {
                            return replaceTextRange(
                                [matchOffset, matchOffset + match[1].length],
                                `${match[1][0] === 'B' ? 'D' : 'd'}eny`
                            );
                        }
                    });
                }
                match = /^(_*)master((?:_*)(?:node|server|set|service|client))?(s?)$/i.exec(node.name);
                if (match) {
                    const matchOffset = token.start + match.index;
                    context.report({
                        node,
                        messageId: 'avoidMaster',
                        data: { name: node.name },
                        fix: ({ replaceTextRange }) => {
                            const isPlural = !!match[3];
                            const prefix = match[1] || '';
                            const replacement = match[2]
                                ? `${prefix}primary${match[2]}${match[3] || ''}`
                                : isPlural
                                ? `${prefix}primaries`
                                : `${prefix}primary`;

                            return replaceTextRange([matchOffset, matchOffset + match[0].length], replacement);
                        }
                    });
                }
                match = /^(_*)slave((?:_*)(?:node|server|set|service|client))?(s?)$/i.exec(node.name);
                if (match) {
                    const matchOffset = token.start + match.index;
                    context.report({
                        node,
                        messageId: 'avoidSlave',
                        data: { name: node.name },
                        fix: ({ replaceTextRange }) => {
                            return replaceTextRange(
                                [matchOffset, matchOffset + match[0].length],
                                `${match[1] || ''}replica${match[2] || ''}${match[3] || ''}`
                            );
                        }
                    });
                }
            }
        };
    }
};
