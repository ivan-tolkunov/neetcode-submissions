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
    constructor() {
        this.count = 0;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    countUnivalSubtrees(root) {
        this.dfs(root);
        return this.count;
    }

    dfs(root) {
        if (!root) {
            return true;
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right); 

        if (left && right) {
            if (root.left && root.left.val !== root.val) {
                return false;
            }
            if (root.right && root.right.val !== root.val) {
                return false;
            }

            this.count++;

            return true;
        }

        return false;
    }
}
