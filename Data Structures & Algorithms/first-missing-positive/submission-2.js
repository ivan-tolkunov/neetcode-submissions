class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let i = 0;
        let len = nums.length;

        while (i < len) {

            if (nums[i] <= 0 || nums[i] > len) {
                i++;
                continue;
            }

            let index = nums[i] - 1;

            if (nums[i] !== nums[index]) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
            } else {
                i++;
            }
        }

        for (let i = 1; i <= len; i++) {
            if (nums[i - 1] !== i) {
                return i;
            }
        }

        return len + 1;
    }
}
