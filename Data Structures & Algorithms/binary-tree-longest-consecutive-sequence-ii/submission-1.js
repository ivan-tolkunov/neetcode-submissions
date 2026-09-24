/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    constructor() {
        this.max = 0;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    longestConsecutive(root) {
        this.longestPath(root);
        return this.max;
    }

    longestPath(node) {
        if (!node) {
            return [0, 0];
        }

        let dec = 1;
        let inc = 1;

        if (node.left) {
            const left = this.longestPath(node.left);

            if (node.left.val + 1 === node.val) {
                dec = left[1] + 1;
            } else if (node.left.val - 1 === node.val) {
                inc = left[0] + 1;
            }
        }

        if (node.right) {
            const right = this.longestPath(node.right);

            if (node.right.val + 1 === node.val) {
                dec = Math.max(dec, right[1] + 1);
            } else if (node.right.val - 1 === node.val) {
                inc = Math.max(inc, right[0] + 1);
            }
        }

        this.max = Math.max(this.max, inc + dec - 1);
        return [inc, dec];
    }
}
