class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const cache = new Map();

        function rec(i, cur) {
            const key = `${i},${cur}`;

            if (i === nums.length) {
                return cur;
            }

            if (cache.has(key)) {
                return cache.get(key);
            }

            const next = cur * nums[i];

            const res = Math.max(
                next,
                nums[i],
                rec(i + 1, next),  
                rec(i + 1, nums[i])
            );

            cache.set(key, res);
            return res;
        }

        return rec(1, nums[0]);
    }
}