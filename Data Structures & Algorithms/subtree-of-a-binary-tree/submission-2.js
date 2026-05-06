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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const newRoot = this.search(root, subRoot);
        if (!newRoot) {
            return false;
        }

        const valid =  this.validateTree(newRoot, subRoot);

        if (valid) {
            return true;
        } else {
           return this.isSubtree(newRoot.left, subRoot) || this.isSubtree(newRoot.right, subRoot);
        }
    }

    search(root, subRoot) {
        if (!root) {
            return null;
        }

        if (root.val === subRoot.val) {
            return root;
        }

        return this.search(root.left, subRoot) ?? this.search(root.right, subRoot);
    }

    validateTree(root, subRoot) {

        if (!root && !subRoot) {
            return true;
        }

        if (!root || !subRoot || root.val !== subRoot.val) {
            return false;
        }

        return (this.validateTree(root.left, subRoot.left) && this.validateTree(root.right, subRoot.right));
    }
}
