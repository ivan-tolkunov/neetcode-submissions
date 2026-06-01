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
     * @return {number[][]}
     */
    findLeaves(root) {
        const res = [];
        while (root) {
            const leaves = [];
            root = this.removeNode(root, leaves);
            res.push(leaves);
        }

        return res;
    }

    removeNode(root, leaves) {
        if (!root) {
            return null;
        }
        
        if (!root.left && !root.right) {
            leaves.push(root.val);
            return null;
        }

        root.left = this.removeNode(root.left, leaves);
        root.right = this.removeNode(root.right, leaves);

        return root;
    }
}
