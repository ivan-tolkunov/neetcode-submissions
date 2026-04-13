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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let curr = root;
        
        while (stack.length > 0 || curr) {
            while(curr) {
                stack.push(curr);
                curr = curr.left;
            }
            k -= 1;
            curr = stack.pop();
            if (k === 0) {
                return curr.val;
            }
            curr = curr.right;
        }
    }
}
