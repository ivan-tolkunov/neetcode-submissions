class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let len = nums.length;

        for (let i = 0; i < len; i++) {
            if (nums[i] <= 0) {
                nums[i] = len + 1;
            }
        }

        for (let i = 0; i < len; i++) {
            if (nums[i] > len) {
                continue;
            }

            const num = Math.abs(nums[i]);

            if (nums[num - 1] > 0) {
                nums[num - 1] = -nums[num - 1];
            }
        }

        for (let i = 0; i < len; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }

        return len + 1;
    }
}
