/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
        const pathP = [];
        const pathQ = [];

        const foundP = this.findPath(root, p, pathP);
        const foundQ = this.findPath(root, q, pathQ);

        if (!foundP || !foundQ) return null;

        const seen = new Set(pathQ);

        while (pathP.length > 0) {
            const node = pathP.pop();

            if (seen.has(node)) {
                return node;
            }
        }

        return null;
    }

    findPath(root, target, path) {
        if (!root) return false;

        path.push(root);

        if (root === target) {
            return true;
        }

        const found =
            this.findPath(root.left, target, path) ||
            this.findPath(root.right, target, path);

        if (!found) {
            path.pop();
        }

        return found;
    }
}
