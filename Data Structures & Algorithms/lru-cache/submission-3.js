class Node {
    constructor(key, value, next, prev) {
       this.key = key;
       this.value = value;

       this.next = next;
       this.prev = prev; 
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        const left = new Node(0, 0, null, null);
        const right = new Node(0, 0, null, null);

        left.next = right;
        right.prev = left;

        this.left = left;
        this.right = right;
        
        this.capacity = capacity;
        this.cache = new Map();
    }

    // Remove right (old) node
    remove(node) {
        const prev = node.prev;
        const next = node.next;

        next.prev = prev;
        prev.next = next;
    }

    // Update left pointer (LRU)
    insert(node) {
       const lru = this.left.next;
       lru.prev = node;
       node.next = lru;
       node.prev = this.left;
       this.left.next = node; 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const el = this.cache.get(key);
            this.remove(el);
            this.insert(el);

            return el.value;
        }
        return -1;
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

        this.cache.set(key, new Node(key, value, null, null));
        this.insert(this.cache.get(key));

        if (this.capacity < this.cache.size) {
            const node = this.right.prev;
            this.remove(this.right.prev);
            this.cache.delete(node.key);
        }
    }
}
