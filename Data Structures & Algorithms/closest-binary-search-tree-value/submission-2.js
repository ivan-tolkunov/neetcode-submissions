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
    /**
     * @param {TreeNode} root
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let closest = root.val;

        while(root) {
            const diff = Math.abs(target - root.val);

            if (diff < Math.abs(closest - target)) {
                closest = root.val;
            }

            if (root.val > target) {
                root = root.left;
            } else {
                root = root.right;
            }
        }


        return closest;
    }
}
