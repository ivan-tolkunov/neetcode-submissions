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
        return this.clone(node);
    }

    clone(node) {
        if (!node) {
            return null;
        }

        if (this.map.has(node)) {
            return this.map.get(node);
        }

        const clone = new Node(node.val);
        this.map.set(node, clone);

        for (let nei of node.neighbors) {
            clone.neighbors.push(this.clone(nei));
        }

        return clone;
    }
}
