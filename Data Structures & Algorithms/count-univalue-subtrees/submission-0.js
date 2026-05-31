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
     * @return {number}
     */
    countUnivalSubtrees(root) {

        function isValid(node, parent) {
            if (!node) {
                return true;
            }

            if (node.val != parent) {
                return false;
            }

            return isValid(node.left, parent) && isValid(node.right, parent);
        }

        let count = 0;

        function dfs(node) {
            if (!node) {
                return;
            }

            if (isValid(node, node.val)) {
                count++;
            }

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return count;
    }
}
