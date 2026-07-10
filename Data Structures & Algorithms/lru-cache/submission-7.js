class ListNode {
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
        this.cache = new Map();
        this.cap = capacity;
        this.head = null;
        this.tail = null;
    }

        insert(key, val) {
            const node = new ListNode(key, val);

            if (!this.tail) {
                this.head = node;
                this.tail = node;
                return node;
            }

            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;

            return node;
        }
        
        remove(node) {
            if (node.prev) {
                node.prev.next = node.next;
            } else {
                this.head = node.next;
            }

            if (node.next) {
                node.next.prev = node.prev;
            } else {
                this.tail = node.prev;
            }

            node.next = null;
            node.prev = null;
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

        const newNode = this.insert(key, node.val);
        this.cache.set(key, newNode);

        return newNode.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        const node = this.insert(key, value);
        this.cache.set(key, node);

        if (this.cache.size > this.cap) {
            const lru = this.head;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
