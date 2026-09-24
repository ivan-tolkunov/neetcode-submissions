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
        let max = 0;
        const q = [root];


        while (q.length > 0) {
            const node = q.pop();

            max = Math.max(
                max,
                this.search(node, node.val, -1) + this.search(node, node.val, 1));
            
            max = Math.max(
                max,
                this.search(node, node.val, 1) + this.search(node, node.val, -1));

            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

        return max - 1;
    }

    search(node, target, action) {
        if (!node) {
            return 0;
        }

        if (node.val !== target) {
            return 0;
        }

        const newTarget = target + action;

        return 1 + 
            this.search(node.left, newTarget, action) + 
            this.search(node.right, newTarget, action);
    }
}
