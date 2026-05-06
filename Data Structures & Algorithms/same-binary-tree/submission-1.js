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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const qp = new Queue();
        const qq = new Queue();

        qp.push(p);
        qq.push(q);

        while (qp.size() > 0) {
            const pSize = qp.size();
            const qSize = qq.size();

            if (pSize !== qSize) {
                return false;
            }

            for (let i = 0; i < pSize; i++) {
                const elP = qp.pop();
                const elQ = qq.pop();

                if (!elP && !elQ) {
                    continue;
                }

                if (!elP || !elQ || elP.val !== elQ.val) {
                    return false;
                }

                qp.push(elP.left);
                qq.push(elQ.left);

                qp.push(elP.right);
                qq.push(elQ.right);

            }
        }

        return true;
    }
}
