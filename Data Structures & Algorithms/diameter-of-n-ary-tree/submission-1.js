/**
 * Definition for a _Node.
 * class _Node {
 *     constructor(val, children) {
 *         this.val = val === undefined ? 0 : val;
 *         this.children = children === undefined ? [] : children;
 *     }
 * }
 */

class Solution {
    constructor() {
        this.max = 0;
    }
    /**
     * @param {_Node} root
     * @return {number}
     */
    diameter(root) {
        if (!root) {
            return 0;
        }

        this.path(root);

        return this.max;
    }

    path(root) {
        let b1 = 0;
        let b2 = 0;

        for (let child of root.children) {
            const len = 1 + this.path(child);

            if (len > b1) {
                b2 = b1;
                b1 = len;
            } else if (len > b2) {
                b2 = len;
            }
        }

        this.max = Math.max(this.max, b1 + b2);

        return b1;
    }
}
