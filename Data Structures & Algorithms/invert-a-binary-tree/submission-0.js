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
     * @return {TreeNode}
     */
    invertTree(root) {
        const newRoot = root;

       function invert(node) {
            if (!node) {
                return null;
            }
            
            const left = node.left;
            node.left = node.right;
            node.right = left;

            invert(node.left);
            invert(node.right);
       }

       invert(newRoot); 


        return root;
    }
}
