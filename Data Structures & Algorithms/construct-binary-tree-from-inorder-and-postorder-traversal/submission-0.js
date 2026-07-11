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
     * @param {number[]} inorder
     * @param {number[]} postorder
     * @return {TreeNode}
     */
    buildTree(inorder, postorder) {
        if (postorder.length === 0) {
            return null;
        }

        const index = postorder.length - 1;
        const val = postorder[index];

        const node = new TreeNode(val);

        const i = inorder.findIndex(x => x === val);

        node.left = this.buildTree(
            inorder.slice(0, i),
            postorder.slice(0, i)
        );

        node.right = this.buildTree(
            inorder.slice(i + 1),
            postorder.slice(i, postorder.length - 1)
        );

        return node;
    }
}
