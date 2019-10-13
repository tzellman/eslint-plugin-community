'use strict';

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            recommended: true,
            category: 'Variables',
            description: 'discourage using the term `whitelist` in variable names'
        },
        messages: {
            avoidName: 'Variable `{{ name }}` should not contain `whitelist`'
        }
    },
    create(context) {
        return {
            Identifier: (node) => {
                if (/white_*list/i.test(node.name)) {
                    context.report({
                        node,
                        messageId: 'avoidName',
                        data: { name: node.name }
                    });
                }
            }
        };
    }
};
