/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (!root) {
            return root;
        }

        let node = root;

        do {
            if (node.left) {
                node.left.next = node.right;
            }

            if (node.right && node.next) {
                node.right.next = node.next.left;
            }

            node = node.next;
        } while (node);

        this.connect(root.left);

        return root;
    }
}
