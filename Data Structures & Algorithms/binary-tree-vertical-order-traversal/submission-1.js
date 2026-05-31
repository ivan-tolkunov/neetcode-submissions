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
     * @return {number[][]}
     */
    verticalOrder(root) {
        if (!root) {
            return [];
        }
        
        const q = new Queue();
        const cols = new Map();

        q.push([root, 0]);

        while (!q.isEmpty()) {
            const [node, col] = q.pop();

            if (!cols.has(col)) {
                cols.set(col, []);
            }

            cols.get(col).push(node.val);

            if (node.left) {
                q.push([node.left, col - 1]);
            }
            if (node.right) {
                q.push([node.right, col + 1]);
            }
        }

        const sortedKeys = Array.from(cols.keys()).sort((a, b) => a - b);
        return sortedKeys.map((k) => cols.get(k));
    }
}
