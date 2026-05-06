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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const pPath = this.getPath(root, p, []);
        const qPath = this.getPath(root, q, []);

        let elp = pPath.shift();
        let elq = qPath.shift();

        let res = elp;

        while (elp && elq && elp.val === elq.val) {
            res = elp;
            elp = pPath.shift();
            elq = qPath.shift();
        }

        return res;
    }

    getPath(root, node, path){
        if (!root) {
            return [];
        }

        path.push(root);

        if (root.val > node.val) {
            return this.getPath(root.left, node, path);
        } else if (root.val < node.val) {
            return this.getPath(root.right, node, path);
        } else {
            return path;
        }
    }
}
