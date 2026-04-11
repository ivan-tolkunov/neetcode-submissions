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

        const leftTree = this.findHeight(root.left, 1);
        const rightTree = this.findHeight(root.right, 1);

        if(Math.abs(leftTree - rightTree) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }


    findHeight(root, cur) {
        if (!root) {
            return cur;
        }

        return Math.max(this.findHeight(root.left, cur + 1), this.findHeight(root.right, cur + 1));
    }
}
