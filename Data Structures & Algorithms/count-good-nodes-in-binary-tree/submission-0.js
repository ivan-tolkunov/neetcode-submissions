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
    goodNodes(root) {
        return this.dfs(root, root.val);
    }

    dfs(root, val) {
        if (!root) {
            return 0;
        }

        if (root.val >= val) {
            val = root.val;
            return 1 + this.dfs(root.left, val) + this.dfs(root.right, val);
        } 

        return this.dfs(root.left, val) + this.dfs(root.right, val); 
    }
}
