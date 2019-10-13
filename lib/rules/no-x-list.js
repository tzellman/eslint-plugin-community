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
            avoidBlacklist: 'Variable `{{ name }}` should not contain `blacklist`',
            avoidBlackball: 'Variable `{{ name }}` should not contain `blackball`'
        }
    },
    create(context) {
        return {
            Identifier: (node) => {
                if (/white_*list/i.test(node.name)) {
                    context.report({
                        node,
                        messageId: 'avoidWhitelist',
                        data: { name: node.name }
                    });
                } else if (/black_*list/i.test(node.name)) {
                    context.report({
                        node,
                        messageId: 'avoidBlacklist',
                        data: { name: node.name }
                    });
                } else if (/black_*ball/i.test(node.name)) {
                    context.report({
                        node,
                        messageId: 'avoidBlackball',
                        data: { name: node.name }
                    });
                }
            }
        };
    }
};
