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

    constructor() {
        this.depth = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    countUnivalSubtrees(root) {
        if (!root) {
            return 0;
        }

        const q = [root]
        let head = 0;
        let count = 0;

        while (head < q.length) {
            const size = q.length - head;

            for (let i = 0; i < size; i++) {
                const node = q[head++];
                this.depth = 0;


                if (this.rec(node, node.val)) {
                    count += this.depth;
                    continue;
                }

                if (node.left) {
                    q.push(node.left);
                } 
                if (node.right) {
                    q.push(node.right);
                }
            }
        }

        return count;
    }


    rec(root, prev) {
        if (!root) {
            return true;
        }

        if (root.val !== prev) {
            return false;
        }

        this.depth++;

        return this.rec(root.left, prev) && this.rec(root.right, prev);
    }
}
