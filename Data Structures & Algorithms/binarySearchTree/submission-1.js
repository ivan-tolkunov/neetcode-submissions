class Node {
    key;
    val;
    left;
    right;

    constructor(key, val, left = null, right = null) {
        this.key = key
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class TreeMap {
    root;
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        if (!this.root) {
            this.root = new Node(key, val);
            return;
        }

        function rec(node) {
            if (!node) {
                return new Node(key, val, null, null);
            }

            if (key > node.key) {
                node.right = rec(node.right);
            } else if(key < node.key) {
                node.left = rec(node.left);
            } else {
                node.val = val;
                return node;
            }

           return node; 
        }

        this.root = rec(this.root);
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let node = this.root;

        while (node) {
            if (node.key < key) {
                node = node.right;
            } else if (node.key > key) {
                node = node.left;
            } else {
                return node.val;
            }
        }

        return  -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        let minNode = this.root;

        if (!minNode) {
            return -1;
        }


        while (minNode.left) {
           minNode = minNode.left; 
        }

        return minNode.val;
    }

    /**
     * @returns {number}
     */
    getMax() {
        let maxNode = this.root;

        if (!maxNode) {
            return -1;
        }

        while (maxNode.right) {
           maxNode = maxNode.right; 
        }

        return maxNode.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        function rec  (node, key) {
            if (!node) return null;

            if (key < node.key) {
                node.left = rec(node.left, key);
                return node;
            }

            if (key > node.key) {
                node.right = rec(node.right, key);
                return node;
            }

            if (!node.left || !node.right) {
                return node.left ?? node.right;
            }

            let cur = node.right;
            while (cur.left) {
                cur = cur.left;
            }

            node.key = cur.key;
            node.val = cur.val;

            node.right = rec(node.right, cur.key);
            return node;
        };

        this.root = rec(this.root, key);
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const inorder = [];
        let node = this.root;

        function dfs(root) {
            if (!root) {
                return;
            }
            dfs(root.left);
            inorder.push(root.key);
            dfs(root.right);
        }

        dfs(node);

        return inorder;
    }
}
