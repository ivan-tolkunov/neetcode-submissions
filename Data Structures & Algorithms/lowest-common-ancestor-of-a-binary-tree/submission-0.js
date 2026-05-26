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
        let stackP = [];
        let stackQ = [];

        this.findPath(root, p.val, stackP);
        this.findPath(root, q.val, stackQ);

        while (stackP.length > 0) {
            const node = stackP.pop();
            if (stackQ.includes(node)) {
                return node;
            }
        }

        return new TreeNode(0);
    }

    findPath(root, val, stack) {
        if (!root) {
            return false;
        }

        stack.push(root);

        if (root.val === val) {
            return true;
        }

        const find = this.findPath(root.left, val, stack) || this.findPath(root.right, val, stack);

        if (!find) {
            stack.pop();
        }

        return find;
    }
}
