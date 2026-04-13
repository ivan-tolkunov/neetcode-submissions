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
        const sortedArray = [];

        function search(root) {
            if (!root) {
                return;
            }

            search(root.left);
            sortedArray.push(root.val);
            search(root.right);
        }

        search(root);

        return sortedArray[k - 1];
    }
}
