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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) {
            return "N";
        }

        return `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        //1,2,N,N,3,4,N,N,5,N,N
        const array = data.split(",");
        let index = 0;

        function dfs() {
            if (array[index] === 'N') {
                index++;
                return null;
            }

            const node = new TreeNode(array[index]);
            index++;
            node.left = dfs(index);
            node.right = dfs(index);

            return node;
        }

        return dfs();
    }
}
