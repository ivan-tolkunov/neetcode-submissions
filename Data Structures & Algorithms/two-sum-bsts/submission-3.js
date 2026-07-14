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
        const set = new Set();

        this.inorder(root1, set);

        for (let val of set) {
            if (this.search(root2, target - val)) {
                return true;
            }
        }

        return false;
    }

    inorder(root, set) {
        if (!root) {
            return;
        }

        this.inorder(root.left, set);
        set.add(root.val);
        this.inorder(root.right, set);
    }

    search(root, target) {
        if (!root) {
            return false;
        }

        if (root.val > target) {
            return this.search(root.left, target);
        } else if (root.val < target) {
            return this.search(root.right, target);
        } else {
            return true;
        }
    }
}
