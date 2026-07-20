class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let i = 0;
        let len = nums.length;

        while(i < len) {

            if (nums[i] > len || nums[i] <= 0) {
                i++;
                continue;
            }

            const index = nums[i] - 1;

            if (nums[i] !== nums[index]) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
            } else {
                i++
            }
        }

        for (let i = 1; i <= len; i++) {
            if (i !== nums[i - 1]) {
                return i;
            }
        }

        return len + 1;
    }
}
