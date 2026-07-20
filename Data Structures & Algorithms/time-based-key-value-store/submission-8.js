class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push({ value, timestamp });
            return;
        }

        this.keyStore.set(key, [{ value, timestamp }]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.get(key)) {
            return "";
        }

        const store = this.keyStore.get(key);
        const value = this.#search(store, timestamp);

        return value;
    }

    #search(store, timestamp) {
        let left = 0;
        let right = store.length - 1;
        let answer = "";

        while(left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            const item = store[mid];

            if (item.timestamp > timestamp) {
                right = mid - 1;
            } else {
               answer = store[mid].value;
               left = mid + 1; 
            }
        }

        return answer;
    }
}
