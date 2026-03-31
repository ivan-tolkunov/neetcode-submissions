class MyStack {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const node = {
            next: this.head,
            value: x
        }

        this.head = node;
    }

    /**
     * @return {number}
     */
    pop() {
        const res = this.head;

        if (!res) {
            return res;
        }

        this.head = this.head.next;

        return res.value;
    }

    /**
     * @return {number}
     */
    top() {
        return this.head.value;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.head;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
