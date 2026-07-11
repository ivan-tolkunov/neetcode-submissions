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
        this.val = Infinity;
    }

    /**
     * @param {TreeNode} root
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        this.bs(root, target, Infinity);
        return this.val;
    }

    bs(root, target) {
        if (!root) {
            return;
        }

        const diff = Math.abs(root.val - target);
        const prev = Math.abs(target - this.val);

        if (diff < prev) {
            this.val = root.val;
        }

        if (root.val > target) {
            this.bs(root.left, target);
        } else {
            this.bs(root.right, target);
        }
    }
}
