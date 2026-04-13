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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const stack = [];

        if (root) {
            stack.push(root);
        }

        while (stack.length > 0) {
            const len = stack.length;
            res.push(stack[len - 1].val);

            for (let i = 0; i < len; i++) {
                const node = stack.shift();

                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            }
        }

        return res;
    }
}
