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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (!root) {
            return false;
        }
        const newSum = targetSum - root.val;

        if (!root.left && !root.right) {
            return newSum === 0;
        }

        const leftPath = this.hasPathSum(root.left, newSum);
        if(leftPath) {
            return true;
        } 
        const rightPath = this.hasPathSum(root.right, newSum);
        if (rightPath) {
            return true;
        }

        return false;
    }
}
