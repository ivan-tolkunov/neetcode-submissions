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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @param {number} target
     * @return {boolean}
     */
    twoSumBSTs(root1, root2, target) {
        const q = new Queue();
        q.push(root1);

        while (!q.isEmpty()) {
            const node = q.pop();

            if (this.search(target - node.val, root2)) {
                return true;
            }

            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

        return false;
    }

    search(target, root) {
        if (!root) {
            return false;
        }

        if (root.val > target) {
            return this.search(target, root.left);
        } else if (root.val < target) {
            return this.search(target, root.right);
        }

        return true;
    }

}
