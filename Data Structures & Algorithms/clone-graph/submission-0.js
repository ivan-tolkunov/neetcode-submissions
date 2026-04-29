/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }

        const clones = new Map();
        const q = new Queue();

        const cloneNode = new Node(node.val);
        clones.set(node, cloneNode);
        q.push(node);

        while (!q.isEmpty()) {
            const layerSize = q.size();

            for (let i = 0; i < layerSize; i++) {
                const toCloneNode = q.pop();
                const clone = clones.get(toCloneNode);

                for (const n of toCloneNode.neighbors) {
                    if (!clones.has(n)) {
                        q.push(n);
                        clones.set(n, new Node(n.val));
                    }

                    clone.neighbors.push(clones.get(n));
                }
            }
        }

        return clones.get(node);
    }
}
