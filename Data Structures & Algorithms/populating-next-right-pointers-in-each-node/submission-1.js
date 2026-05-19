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
        const set = new Queue();

        if (root) {
            set.push([root]);
        }

        while (!set.isEmpty()) {
            const layer = set.pop();
            const nodes = [];

            for (let i = 0; i < layer.length; i++) {
                layer[i].next = layer[i + 1] ?? null;

                if (layer[i].left) {
                    nodes.push(layer[i].left);
                } 
                if (layer[i].right) {
                    nodes.push(layer[i].right);
                }
            }

            if (nodes.length > 0) {
                set.push(nodes);
            }
        }

        return root;
    }
}
