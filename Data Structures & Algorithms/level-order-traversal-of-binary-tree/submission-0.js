/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        const stack = [];

        if (root) {
            stack.push(root);
        }

        while(stack.length > 0) {
            const stackLen = stack.length;
            const layer = [];

            for (let i = 0; i < stackLen; i++) {
                const node = stack.shift();
                layer.push(node.val);
                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            }

            res.push(layer);
        }

        return res;
    }
}
