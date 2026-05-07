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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    map = new Map();
    index = 0;
    preorder;

    buildTree(preorder, inorder) {
        inorder.forEach((el, index) => this.map.set(el, index));
        this.preorder = preorder;

        return this.dfs(0, preorder.length - 1);

    }

    dfs (left, right) {
        if (left > right) {
            return null;
        }

        const val = this.preorder[this.index];
        const root = new TreeNode(val);

        const mid = this.map.get(val);

        this.index++;

        root.left = this.dfs(left, mid - 1);
        root.right = this.dfs(mid + 1, right);

        return root;
    }
}
