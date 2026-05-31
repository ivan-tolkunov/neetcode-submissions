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
     * @return {number}
     */
    longestConsecutive(root) {
        let len = 0;

        function findPath(node, curLen) {
            if (!node) {
                return;
            }

            len = Math.max(len, curLen);

            if (node.left) {
                if (node.left.val - 1 === node.val) {
                    findPath(node.left, curLen + 1);
                } else {
                    findPath(node.left, 0); 
                }
            }

            if (node.right) {
                if (node.right.val - 1 === node.val) {
                    findPath(node.right, curLen + 1);
                } else {
                    findPath(node.right, 0); 
                }
            }
        }

        findPath(root, 0);

        return len + 1;
    }

}
