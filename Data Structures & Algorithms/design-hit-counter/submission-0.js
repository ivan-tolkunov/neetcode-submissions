class HitCounter {
    constructor() {
        this.counter = [];
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        const index = this.search(timestamp);
        this.counter.splice(index, 0, timestamp);
    }

    search(timestamp) {
        let left = 0;
        let right = this.counter.length;

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (this.counter[mid] < timestamp) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    upperBound(timestamp) {
        let left = 0;
        let right = this.counter.length;

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (this.counter[mid] <= timestamp) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        const min = Math.max(timestamp - 300 + 1, 1);
        const max = timestamp;

        const minIndex = this.search(min);        
        const maxIndex = this.upperBound(max);  

        return maxIndex - minIndex;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
