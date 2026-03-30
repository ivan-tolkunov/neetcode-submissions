class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.min = val;
            this.stack.push(0);
            return;
        }

        const newVal = val - this.min;

        if (newVal < 0) {
            this.min = val;
        }

        this.stack.push(newVal);

    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();

        if (val < 0) {
            this.min -= val;
        }
    }

    /**
     * @return {number}
     */
    top() {
        const topVal = this.stack[this.stack.length - 1];

        if (topVal > 0) {
            return this.min + topVal;
        }

        return this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
