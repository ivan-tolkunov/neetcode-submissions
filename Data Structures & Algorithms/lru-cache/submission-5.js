class Node {
    constructor(key, val, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev; 
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.head = null;
    }

    insert(key, val) {
        const node = new Node(key, val);
        this.cache.set(key, node);

        if (!this.head) {
            node.next = node;
            node.prev = node;
            this.head = node;

            return this.head;
        }

        const tail = this.head.prev;

        node.next = this.head;
        node.prev = tail;
        tail.next = node;
        this.head.prev = node;

        this.head = node;

        return this.head;
    }

    remove(node) {
        if (node.next === node) {
            this.head = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;

            if (this.head === node) {
                this.head = node.next;
            }
        }

        this.cache.delete(node.key);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) { 
            return -1;
        }

        const node = this.cache.get(key);
        this.remove(node);

        return this.insert(node.key, node.val).val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        } else if (this.cache.size === this.cap) {
            this.remove(this.head.prev);
        }

        this.insert(key, value);
    }
}
