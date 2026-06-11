class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        for (let i = 1; i < nums.length; i++) {
            nums[i] = nums[i - 1] + nums[i];
        }

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] % k === 0) {
                return true;
            }

            for (let j = i - 2; j >= 0; j--) {
                const sum = nums[i] - nums[j];

                if (sum % k === 0) {
                    return true;
                }
            }
        }

        return false;
    }
}
