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
     * @return {boolean}
     */
    isCompleteTree(root) {
       const q = new Queue();
        q.push(root);

        let reachedNull = false;

        while (!q.isEmpty()) {
            const node = q.pop();

            if (!node) {
                reachedNull = true;
            } else {
            if (reachedNull) {
                return false;
                }

                q.push(node.left);
                q.push(node.right);
            }
        }

        return true; 
    }
}
