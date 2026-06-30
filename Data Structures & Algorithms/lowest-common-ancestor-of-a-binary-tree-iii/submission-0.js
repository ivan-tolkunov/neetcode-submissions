/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {Node} p
     * @param {Node} q
     * @return {Node}
     */
    lowestCommonAncestor(p, q) {
        const visited = new Set();

        let cur = p;

        while(cur) {
            visited.add(cur);
            cur = cur.parent;
        }

        cur = q;

        while (!visited.has(cur)) {
            cur = cur.parent;
        }

        return cur;
    }
}
