class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }


        for (let i = 0; i < len; i++) {
            const val = Math.abs(nums[i]);

            if (val >= 1 && val <= len) {
                if (nums[val - 1] > 0) {
                    nums[val - 1] *= -1;
                } else if (nums[val - 1] === 0) {
                    nums[val - 1] = -1 * (len + 1);
                }
            }
        }

        for (let i = 1; i <= len; i++) {
            if (nums[i - 1] >= 0) {
                return i;
            }
        }

        return len + 1;
    }
}
