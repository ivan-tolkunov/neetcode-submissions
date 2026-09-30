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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }

        const leftTree = this.findHeight(root.left);
        const rightTree = this.findHeight(root.right);

        if(Math.abs(leftTree - rightTree) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }


    findHeight(root) {
        if (!root) {
            return 0;
        }

        return Math.max(1 + this.findHeight(root.left), 1 + this.findHeight(root.right));
    }
}
