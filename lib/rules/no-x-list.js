'use strict';

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            recommended: true,
            category: 'Variables',
            description: 'discourage using common inclusion/exclusion terms that may relate to race'
        },
        messages: {
            avoidWhitelist: 'Variable `{{ name }}` should not contain `whitelist`',
            avoidBlacklist: 'Variable `{{ name }}` should not contain `blacklist`'
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
            }
        };
    }
};
