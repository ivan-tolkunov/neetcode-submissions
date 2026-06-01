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
                return [];
            }
            const subtree = [node.val];

            const left = dfs(node.left);
            const right = dfs(node.right);

            subtree.push(...left);
            subtree.push(...right);

            const sum = subtree.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0,
            );

            max = Math.max(max, sum / subtree.length);

            return subtree;
        }

        dfs(root);

        return max;
    }
}
