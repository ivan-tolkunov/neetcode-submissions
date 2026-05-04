class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const size = (2 * nums.length) + 1;
        const buckets = Array.from({ length: size }, () => []);
        const res = Array.from({length: k},  () => 0);

        for (let num of nums) {
            let index = Math.abs(num % size);
            let el = buckets[index];

            while (el.length > 0 && el[0] !== num ) {
                index = index + 1;
                el = buckets[index];   
            }

            el.push(num);
        }

        const newBuckets = buckets.filter((b) => b.length > 0).sort((a, b) => b.length - a.length);

        for (let i = 0; i < res.length; i++) {
            const el = newBuckets[i][0];
            res[i] = el;
        }

        return res;
    }
}
