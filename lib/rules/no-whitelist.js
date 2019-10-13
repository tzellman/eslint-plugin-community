'use strict';

module.exports = {
    create(context) {
        return {
            VariableDeclarator: (node) => {
                if (/whitelist|white_list/i.test(node.id.name)) {
                    context.report({ node, message: 'Variable names should not contain "whitelist"' });
                }
            }
        };
    }
};
