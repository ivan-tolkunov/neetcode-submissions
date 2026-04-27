class MinHeap {
    constructor() {
        this.heap = [null];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let length = this.heap.push(val);
        let index = length - 1;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (this.heap[index] < this.heap[parent]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            } else {
                break;
            }

            index = parent;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length === 1) {
            return  -1;
        } 

        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        const res = this.heap[1];

        this.heap[1] = this.heap.pop();

        let index =  1;

        while (true) {
            let smallest = index;
            const left = 2 * index;
            const right = 2 * index + 1;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }

        return res; 
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap[1] ?? -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        for (let num of nums) {
            this.push(num);
        }
    }
}
