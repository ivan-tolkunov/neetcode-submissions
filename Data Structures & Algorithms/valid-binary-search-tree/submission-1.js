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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.dfs(root, Infinity, -Infinity);
    }

    dfs(root, max, min) {
        if (!root) {
            return true;
        }

        if (max <= root.val || min >= root.val) {
            return false;
        }

        return (this.dfs(root.left, root.val, min) && this.dfs(root.right, max, root.val)); 
    }
}
