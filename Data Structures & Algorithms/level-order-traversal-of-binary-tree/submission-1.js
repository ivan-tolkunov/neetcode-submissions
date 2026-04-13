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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];

        if (!root) {
            return res;
        }

        function dfs(root, layer) {
            if (!root) {
                return;
            }

            if (!res[layer]) {
                res[layer] = [];
            }

            res[layer].push(root.val);
            layer += 1;

            dfs(root.left, layer);
            dfs(root.right, layer);
        }

        dfs(root, 0);

        return res;
    }
}
