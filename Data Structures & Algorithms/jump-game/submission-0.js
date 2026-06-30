class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const cache = new Map();

        function rec (i) {
            if (i >= nums.length - 1) {
                return true;
            }

            if (nums[i] === 0) {
                return false;
            }

            if (cache.has(i)) {
                return cache.get(i);
            }

            for (let j = nums[i]; j > 0; j--) {
                if (rec(i + j)) {
                    cache.set(i, true);
                    return true;
                }
            }

            cache.set(i, false);
            return false;
        }

        return rec(0);
    }
}
