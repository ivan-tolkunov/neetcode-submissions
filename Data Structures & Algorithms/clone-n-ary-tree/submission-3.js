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
    /**
     * @param {_Node|null} node
     * @return {_Node|null}
     */
    cloneTree(root) {
        if (!root) {
            return null;
        }


        const clone = new Node(root.val, []);

        for (let nei of root.children) {
            clone.children.push(this.cloneTree(nei));
        }

        return clone;
    }
}
