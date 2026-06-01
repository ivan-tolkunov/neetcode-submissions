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
        let max = 0;

        function dfs(node) {
            if (!node) {
                return [0 , 0];
            }

            const left = dfs(node.left);
            const right = dfs(node.right);

            const count = left[1] + right[1] + 1;
            const sum = left[0] + right[0] + node.val;

            max = Math.max(max, sum / count);

            return [sum, count];
        }

        dfs(root);

        return max;
    }
}
