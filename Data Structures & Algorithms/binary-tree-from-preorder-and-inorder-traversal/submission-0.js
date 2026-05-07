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
    buildTree(preorder, inorder) {
        if (preorder.length === 0 || preorder.length === 0) {
            return null;
        }

        const root = preorder[0];
        const mid = inorder.indexOf(root);

        const node = new TreeNode(root);

        node.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        node.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

        return node;
    }
}
