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
    count = 0;
    countUnivalSubtrees(root) {
        if (!root) {
            return this.count;
        }

        this.isValid(root);

        return this.count;
    }


    isValid(node) {
        if (!node) {
            return true;
        }

        const left = this.isValid(node.left);
        const right = this.isValid(node.right);

        if (left && right) {
            if (node.left && node.left.val !== node.val) {
                return false;
            }

            if (node.right && node.right.val !== node.val) {
                return false;
            }

            this.count++;
            return true;
        }

        return false;
    }
}
