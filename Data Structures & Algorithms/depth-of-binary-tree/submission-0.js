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
    maxDepth(root) {
        let depth = 0;

        if (!root) {
            return depth;
        }

        const q = new Queue();

        q.push(root);

        while (q.size() > 0) {
            const len = q.size();

            for (let i = 0; i < len; i++) {
                const el = q.pop();

                if (el.left) {
                    q.push(el.left);
                }
                if (el.right) {
                    q.push(el.right);
                }

            }

            depth++;
        }

        return depth;
    }
}
