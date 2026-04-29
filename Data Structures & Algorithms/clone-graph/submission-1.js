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
        const clones = new Map();
        return this.dfs(node, clones);
    }

    dfs(node, clones) {
        if (!node) {
            return null;
        }

        if (clones.has(node)) {
            return clones.get(node);
        }

        const clone = new Node(node.val);
        clones.set(node, clone);

        for (let nei of node.neighbors) {
            clone.neighbors.push(this.dfs(nei, clones));
        }

        return clone;
    }
}
