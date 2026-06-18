class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            let count = map.get(num) ?? 0;
            map.set(num, ++count);
        }

        const heap = new MinPriorityQueue((x) => x.count);

        for (let [key, value] of map) {
            heap.enqueue({
                num: key,
                count: value
            });

            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const res = [];

        for (let obj of heap) {
            res.push(obj.num);
        }

        return res;
    }
}
