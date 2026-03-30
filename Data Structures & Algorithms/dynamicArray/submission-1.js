class DynamicArray {
    array = [];
    capacity = 0;
    size = 0;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this. capacity = capacity;
        this.array = Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {

        if (this.size + 1 > this.capacity) {
            this.resize();
        }

        this.array[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const n = this.array[this.size - 1];
        this.array[this.size - 1] = undefined;
        this.size--;
        return n;
    }

    /**
     * @returns {void}
     */
    resize() {
        const temp = this.array;
        this.capacity = this.capacity * 2;
        this.array = Array(this.capacity);
        
        for (let i = 0; i < this.size; i++) {
            this.array[i] = temp[i];
        }
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
