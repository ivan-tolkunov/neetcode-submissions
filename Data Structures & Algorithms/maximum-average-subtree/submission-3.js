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
    maximumAverageSubtree(root) {
        return this.dfs(root)[2];
    }

    dfs(root) {
        if (!root) {
            return [0, 0, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const devision = left[0] + right[0] + 1;
        const sum = left[1] + right[1] + root.val;
        const max = Math.max(left[2], right[2], sum / devision);

        return [devision, sum, max];
    }
}
