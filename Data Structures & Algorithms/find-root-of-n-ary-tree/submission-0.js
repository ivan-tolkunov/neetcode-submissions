/**
 * Definition for a _Node.
 * class _Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node[]} tree
     * @return {_Node}
     */
    findRoot(tree) {
        const set = new Set();

        for (let node of tree) {
            for (let nei of node.children) {
               set.add(nei); 
            } 
        }

        for (let node of tree) {
            if (!set.has(node)) {
                return node;
            }
        }

        return null;
    }

}
