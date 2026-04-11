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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) {
            return root;
        }

        if (key > root.val) {
            root.right = this. deleteNode(root.right, key);
        } else if (key < root.val) {
           root.left = this.deleteNode(root.left, key);
        } else {
            if (root.left && root.right) {
                const cur = root.right;
                const minNode = this.findMinNode(cur);
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, root.val);

            } else {
                return root.right ?? root.left;
            }
        }

        return root;
    }

    findMinNode(root) {
        while (root.left) {
            root = root.left;
        }

        return root;
    }
}
