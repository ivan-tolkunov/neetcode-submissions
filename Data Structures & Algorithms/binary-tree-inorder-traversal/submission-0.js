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

    inorderTraversal(root) {
        const res = [];

        function rec(root) {
            if (!root) {
                return;
            }
            rec(root.left);
            res.push(root.val);
            rec(root.right);
        }

        rec(root);

        return res;
    }
}
