class Logger {
    constructor() {
        this.cache = new Map();
        this.limit = 10;
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if (this.cache.has(message)) {
            const should = timestamp - this.cache.get(message) >= 0;

            if (should) {
                this.cache.set(message, timestamp + this.limit);
            }

            return should;
        }

        this.cache.set(message, timestamp + this.limit);

        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
