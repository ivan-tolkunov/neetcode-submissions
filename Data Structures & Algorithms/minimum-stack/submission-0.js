class MinStack {
    constructor() {
        this.stack = [];
        this.size = 0;
        this.index = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.size] = val;
        this.index = this.size;
        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack[this.index] = undefined;
        this.size--;
        this.index--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.index];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = this.stack[0];

        for (let i = 1; i < this.size; i++) {
            if (this.stack[i] < min) {
                min = this.stack[i];
            }
        }

        return min;
    }
}
