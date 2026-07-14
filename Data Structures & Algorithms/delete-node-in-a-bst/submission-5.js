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
            return null;
        }

        if (root.val > key) {
            root.left = this.deleteNode(root.left, key);
        } else if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left && root.right) {
                const right = root.right;
                const minNode = this.findMin(right);
                root.val = minNode.val;
                root.right = this.deleteNode(right, minNode.val);
            } else {
                return root.left ?? root.right;
            }

        }

        return root;
    }

    findMin(root) {
        while(root.left) {
            root = root.left;
        }

        return root;
    }
}
