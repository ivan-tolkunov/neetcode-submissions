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
        const map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        return this.build(0, inorder.length - 1, 0, postorder.length - 1, map, postorder);
    }

    build(inLeft, inRight, postLeft, postRight, inorder, postorder) {
        if (inLeft > inRight) {
            return null;
        }

        const rootVal = postorder[postRight];
        const node = new TreeNode(rootVal);

        const mid = inorder.get(rootVal);
        const leftSize = mid - inLeft;

        node.left = this.build(inLeft, mid - 1, postLeft, postLeft + leftSize - 1, inorder, postorder);
        node.right = this.build(mid + 1, inRight, postLeft + leftSize, postRight - 1, inorder, postorder);

        return node;
    }
}
