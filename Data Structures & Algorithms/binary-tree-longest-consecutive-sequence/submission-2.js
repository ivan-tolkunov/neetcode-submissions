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
    longestConsecutive(root) {
        let len = 0;

        function search(root, prev, path) {
            if (!root) {
                return;
            }

            if (root.val === prev + 1) {
                path++;
                len = Math.max(len, path);
            } else {
                path = 1;
            }

            search(root.left, root.val, path);
            search(root.right, root.val, path);
        }

        search(root, root.val - 1, 0);

        return len;
    }
}
