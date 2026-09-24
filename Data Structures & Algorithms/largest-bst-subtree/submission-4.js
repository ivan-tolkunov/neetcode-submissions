class Solution {
    constructor() {
        this.max = 0;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    largestBSTSubtree(root) {
        this.helper(root);
        return this.max;
    }

    helper(node) {
        if (!node) {
            return [true, 0, Infinity, -Infinity];
        }

        const left = this.helper(node.left);
        const right = this.helper(node.right);

        const [leftIsBST, leftSize, leftMin, leftMax] = left;
        const [rightIsBST, rightSize, rightMin, rightMax] = right;

        if (
            leftIsBST &&
            rightIsBST &&
            leftMax < node.val &&
            node.val < rightMin
        ) {
            const size = leftSize + rightSize + 1;

            this.max = Math.max(this.max, size);

            return [
                true,
                size,
                Math.min(leftMin, node.val),
                Math.max(rightMax, node.val)
            ];
        }

        return [false, 0, 0, 0];
    }
}