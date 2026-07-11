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
        const map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        return this.build(
            0,
            preorder.length - 1,
            0,
            inorder.length -1,
            preorder,
            map
        )
    }

    build(preLeft, preRight, inLeft, inRight, preorder, inorder) {
        if (preLeft > preRight) {
            return null;
        }

        const rootVal = preorder[preLeft];
        const node = new TreeNode(rootVal);

        const mid = inorder.get(rootVal);
        const leftSize = mid - inLeft;

        node.left = this.build(preLeft + 1, preLeft + leftSize,  inLeft, mid - 1, preorder, inorder);
        node.right = this.build(preLeft + leftSize + 1, preRight, mid + 1, inRight, preorder, inorder);

        return node;
    }
}
