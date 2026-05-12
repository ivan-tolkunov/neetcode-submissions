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
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key,   Array.from({length: 1001}, () => null));
        }

        const storage = this.keyStore.get(key);
        storage[timestamp] = value;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        const storage = this.keyStore.get(key);

        if (!storage[timestamp]) {
            for (let i = timestamp; i >= 1; i--) {
                if (storage[i]) {
                    return storage[i];
                }
            }

            return "";
        }

        return storage[timestamp];
    }
}
