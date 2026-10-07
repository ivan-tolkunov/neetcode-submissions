class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let time = 0;
        const maxHeap = new PriorityQueue((a, b) => b[1] - a[1]);
        const stack = [];

        const map = new Map();

        for (let task of tasks) {
            let count = map.get(task) ?? 0;
            count++;
            map.set(task, count);
        }

        for (let [task, count] of map) {
            maxHeap.enqueue([task, count]);
        }

        while (stack.length > 0 || maxHeap.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const [task, count] = maxHeap.dequeue();
                if (count > 1) {
                    stack.push([task, count - 1, time + n]);
                }
            }

            if (stack.length > 0 && time === stack[0][2]) {
                const [task, count, time] = stack.shift();
                maxHeap.enqueue([task, count]);
            }
        }

        return time;
    }
}
