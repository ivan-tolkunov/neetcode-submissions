class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.storage = new Map();
        this.queue = []; //[3,1,2,4]
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.storage.has(key)) {
            this.sort(key);
            return this.storage.get(key);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const size = this.queue.length;

        if (this.storage.has(key)) {
            this.storage.set(key, value);
            this.sort(key);
            return;
        }

        if (size === this.capacity) {
            const keyToRemove = this.queue.pop();
            this.storage.delete(keyToRemove);
        }

        this.queue.push(key);
        this.sort(key);
        this.storage.set(key, value);
    }

    sort(key) {
        const index = this.queue.indexOf(key);
        const el = this.queue[index];
        for (let i = index; i > 0; i--) {
            [this.queue[i], this.queue[i - 1]] = [this.queue[i - 1], this.queue[i]];
        }
        this.queue[0] = el;
    }
}
