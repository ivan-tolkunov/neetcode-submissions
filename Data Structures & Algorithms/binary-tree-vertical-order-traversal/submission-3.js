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
    verticalOrder(root) {
        if (!root) {
            return [];
        }
        
        const map = new Map();

        let head = 0;
        const q = [[root, 0]];

        while(q.length > 0 && head < q.length) {
            const size = q.length - head;

            for (let i = 0; i < size; i++) {
                const info  = q[head++];
                const node = info[0];
                const index = info[1];

                const list = map.get(index) ?? [];

                list.push(node.val);

                map.set(index, list);

                if (node.left) {
                    q.push([node.left, index - 1]);
                } 
                if (node.right) {
                    q.push([node.right, index + 1]);
                }
            }
        }

        const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
        return sortedKeys.map((k) => map.get(k));
    }
}
