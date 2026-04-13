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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = -1;

        function search(root) {
            if (!root) {
                return;
            }

            search(root.left);
            k -= 1;
            if (k === 0 && res === -1) {
                res = root.val;
                return;
            }
            search(root.right);
        }

        search(root);

        return res;
    }
}
