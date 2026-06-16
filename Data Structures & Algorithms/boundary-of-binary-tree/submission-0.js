class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    isLeaf(t) {
        return t.left === null && t.right === null;
    }

    addLeaves(res, root) {
        if (this.isLeaf(root)) {
            res.push(root.val);
        } else {
            if (root.left !== null) {
                this.addLeaves(res, root.left);
            }
            if (root.right !== null) {
                this.addLeaves(res, root.right);
            }
        }
    }

    boundaryOfBinaryTree(root) {
        const res = [];
        if (root === null) {
            return res;
        }

        if (!this.isLeaf(root)) {
            res.push(root.val);
        }

        let t = root.left;
        while (t !== null) {
            if (!this.isLeaf(t)) {
                res.push(t.val);
            }
            if (t.left !== null) {
                t = t.left;
            } else {
                t = t.right;
            }
        }

        this.addLeaves(res, root);

        const stack = [];
        t = root.right;
        while (t !== null) {
            if (!this.isLeaf(t)) {
                stack.push(t.val);
            }
            if (t.right !== null) {
                t = t.right;
            } else {
                t = t.left;
            }
        }

        while (stack.length > 0) {
            res.push(stack.pop());
        }

        return res;
    }
}