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

        if (this.isValid(root, root.val)) {
            this.count++;
        }

        this.countUnivalSubtrees(root.left);
        this.countUnivalSubtrees(root.right);

        return this.count;
    }


    isValid(node, parent) {
        if (!node) {
            return true;
        }

        if (node.val != parent) {
            return false;
        }

        return this.isValid(node.left, parent) && this.isValid(node.right, parent);
    }
}
