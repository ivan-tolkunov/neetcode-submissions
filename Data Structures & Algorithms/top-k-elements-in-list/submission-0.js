class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            let count = 0;
            if (map.has(num)) {
                count = map.get(num);
            }
            
            map.set(num, count + 1);
        }
        const array = Array.from(map).sort((a, b) => b[1] - a[1]);

        const res = array.slice(0, k).flatMap((a) => a[0]);

        return res;
    }
}
