/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val, children) {
 *         this.val = val === undefined ? 0 : val;
 *         this.children = children === undefined ? [] : children;
 *     }
 * }
 */

class Solution {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {_Node|null} node
     * @return {_Node|null}
     */
    cloneTree(root) {
        if (!root) {
            return null;
        }

        let clone = this.map.get(root);

        if (!clone) {
            clone = new Node(root.val, []);
            this.map.set(root, clone);
        }

        for (let nei of root.children) {
            if (this.map.has(nei)) {
                clone.children.push(this.map.get(nei));
                continue;
            }

            clone.children.push(this.cloneTree(nei));
        }

        return clone;
    }
}
