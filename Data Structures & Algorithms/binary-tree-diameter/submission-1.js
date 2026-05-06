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
    diameterOfBinaryTree(root) {
        if (!root) {
            return 0;
        }
        
        const diameter = this.findMaxPath(root.left) + this.findMaxPath(root.right);
        const sub = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right));

        return Math.max(diameter, sub);
    }

    findMaxPath(root) {
        if (!root) {
            return 0;
        }

        let left = 0;
        let right = 0;

        left += 1 + this.findMaxPath(root.left);

        right += 1 + this.findMaxPath(root.right);

        return Math.max(left, right);
    }
}
