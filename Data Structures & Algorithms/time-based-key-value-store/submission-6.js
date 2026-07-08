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
        const arr = this.keyStore.get(key) ?? [];
        arr.push([value, timestamp]);
        this.keyStore.set(key, arr);
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

        const values = this.keyStore.get(key);

        return this.#search(values, timestamp);
    }

    #search(values, target) {
        let left = 0;
        let right = values.length - 1;
        let answer = "";

        while (left <= right) {
            const mid = left + Math.floor((right - left)/ 2);

            if (values[mid][1] > target) {
                right = mid - 1;
            } else {
                answer = values[mid][0];
                left = mid + 1;
            } 
        }

        return answer;
    }
}
