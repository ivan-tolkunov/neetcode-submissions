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
        this.max = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maximumAverageSubtree(root) {
        this.dfs(root);
        return this.max;
    }

    dfs(root) {
        if (!root) {
            return [0, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const devision = left[0] + right[0] + 1;
        const sum = left[1] + right[1] + root.val;

        this.max = Math.max(this.max, sum / devision);

        return [devision, sum];
    }
}
