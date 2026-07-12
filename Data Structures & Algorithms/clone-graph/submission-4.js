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
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        this.clone(node);
        return this.map.get(node) ?? null;
    }

    clone(node) {
        if (!node) {
            return null;
        }

        if(this.map.has(node)) {
            return this.map.get(node);
        }

        const nodeVal = node.val;
        const root = new Node(nodeVal);
        this.map.set(node, root);

        for (let nei of node.neighbors) {
            root.neighbors.push(this.clone(nei));
        }

        return root;
    }
}
