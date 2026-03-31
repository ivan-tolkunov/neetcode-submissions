class LinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let node = this.head;

        while (node) {
            if (index === 0) {
                return node.value;
            }
            index--;
            node = node.next;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = {
            value: val,
            next: null
        }

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        const head = this.head;

        this.head = node;
        this.head.next = head;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = {
            value: val,
            next: null
        }

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }


        this.tail.next = node;
        this.tail = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head) {
            return false;
        }

        let node = this.head;
        let prevNode = this.head;

        while (node) {
            if (index === 0) {
                if (this.tail === node) {
                    this.tail = prevNode;
                    return true;
                }
                prevNode.next = node.next;
                return true;
            }
            index--;
            prevNode = node;
            node = node.next;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let node = this.head;
        const res = [];

        while (node) {
            res.push(node.value);

            node = node.next;
        }

        return res;
    }
}
