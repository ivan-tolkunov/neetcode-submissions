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
        function inorder(root) {
            if (!root) {
                return;
            }

            inorder(root.left);
            k--;
            if (k === 0) {
                res = root.val;
                return;
            }
            inorder(root.right);
        }

        inorder(root);
        return res;
    }
}
