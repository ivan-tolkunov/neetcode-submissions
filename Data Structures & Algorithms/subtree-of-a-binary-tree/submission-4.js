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
        const q = [];
        q.push(root);

        while (q.length > 0) {
            const size = q.length;
            for (let i = 0; i < size; i++) {
                const node = q.shift();

                if (node.val === subRoot.val) {
                    if (this.isValid(node, subRoot)) {
                        return true;
                    }
                }

                if (node.left) {
                    q.push(node.left);
                } 
                if (node.right) {
                    q.push(node.right);
                }
            } 
        }

        return false;
    }

    isValid(root1, root2) {
        if (!root1 && !root2) {
            return true;
        }

        if (!root1 || !root2) {
            return false;
        }

        if (root1.val !== root2.val) {
            return false;
        }

        return this.isValid(root1.left, root2.left) && this.isValid(root1.right, root2.right);
    }
}
