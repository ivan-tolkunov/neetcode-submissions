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
     * @return {number[][]}
     */
    zigzagLevelOrder(root) {
        if (!root) {
            return [];
        }

        const res = [[root.val]];
        const q = [root];
        let head = 0;
        let depth = 1;

        while (head < q.length) {
            const layer = [];
            depth++;
            const size = q.length - head;

            for (let i = 0; i < size; i++) {
                const node = q[head++];

                if (node.left) {
                    q.push(node.left);
                    layer.push(node.left.val);
                }

                if (node.right) {
                    q.push(node.right);
                    layer.push(node.right.val);
                }
            }
            if (layer.length > 0) {
                if (depth % 2 === 0) {
                    res.push(layer.reverse());
                } else {
                    res.push(layer);
                }
            }
        }

        return res;
    }
}
