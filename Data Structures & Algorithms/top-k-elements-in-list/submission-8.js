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

        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (let [num, count] of map) {
            buckets[count].push(num);
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            const bucket = buckets[i];

            for (let el of bucket) {
                res.push(el);

                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
