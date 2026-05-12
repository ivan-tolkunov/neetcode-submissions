class Node {
    constructor(next, val, time) {
        this.next = next;
        this.val = val;
        this.timestamp = time;
    }
}

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
        let head = this.keyStore.get(key);
        const node = new Node(null, value, timestamp);

        if (!head) {
            this.keyStore.set(key, node);
            return;
        }

        while (head.next && head.next.timestamp < timestamp) {
            head = head.next;
        }

        if (head.timestamp > timestamp) {
            node.next = head;
            this.keyStore.set(key, node);
        } else {
            const tmp = head.next;
            head.next = node;
            node.next = tmp;
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let head = this.keyStore.get(key);

        if (!head || head.timestamp > timestamp) {
            return "";
        }


        while (head.next && head.next.timestamp <= timestamp) {
            head = head.next;
        }

        return head.val;
    }
}
