class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let i = 0;

        while (i < nums.length) {
            const correctIndex = nums[i];

            if (nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            } else {
                i++;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i) {
                return i;
            }
        }

        return nums.length;
    }
}