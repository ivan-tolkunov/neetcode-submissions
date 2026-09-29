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

        const q = [root];

        while(q.length > 0) {
            const size = q.length;

            for (let i = 0; i < size; i++) {
                const node = q.shift();

                if (node.left) {
                    q.push(node.left); 
                    node.left.next = node.right;
                }

                if (node.right) {
                    q.push(node.right);
                    if (node.next) {
                        node.right.next = node.next.left;
                    }
                }
            }
        }

        return root;
    }
}
