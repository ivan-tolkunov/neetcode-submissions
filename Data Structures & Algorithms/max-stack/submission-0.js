class ListNode {
    constructor(id, val, next = null, prev = null, deleted = false) {
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.id = id;
        this.deleted = deleted;
    }
}

class MaxStack {
    constructor() {
        this.stack = null;
        this.heap = new PriorityQueue((a, b) => {
            if (a.val !== b.val) {
                return Number(b.val) - Number(a.val);
            } 

            return Number(b.id) - Number(a.id);
        });
        this.id = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const node = new ListNode(this.id++, x);
        this.heap.enqueue(node);
        
        if (!this.stack) {
            this.stack = node;
            return;
        }

        this.stack.next = node;
        node.prev = this.stack;
        this.stack = node;
    }

    #removeNode(node) {
        if (node === this.stack) {
            if (this.stack.prev) {
                this.stack.prev.next = null;
                this.stack = this.stack.prev;
            } else {
                this.stack = null;
            }
        } else {
            if (node.prev) {
                node.prev.next = node.next;
            } 

            if (node.next) {
                node.next.prev = node.prev;
            }

        }

        node.prev = null;
        node.next = null;
        node.deleted = true;

        return node;
    }

    /**
     * @return {number}
     */
    pop() {
        return this.#removeNode(this.stack).val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.val;
    }

    /**
     * @return {number}
     */
    peekMax() {
        while(this.heap.front().deleted) {
            this.heap.dequeue();
        }

        return this.heap.front().val;
    }

    /**
     * @return {number}
     */
    popMax() {
        while(this.heap.front().deleted) {
            this.heap.dequeue();
        }

        return this.#removeNode(this.heap.dequeue()).val;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

// prev, val, next list as stack and head is top element
// max heap and link to element in our list

