class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let sum = 0;
        let len = Infinity;

        for (let right = 0; right < nums.length; right++) {
            sum += nums[right];

            while (sum >= target) {
                len = Math.min(len, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }

        return len === Infinity ? 0 : len;
    }
}
