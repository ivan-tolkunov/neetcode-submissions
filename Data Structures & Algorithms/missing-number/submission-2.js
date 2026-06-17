class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort();
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i) {
                return i;
            }
        }

        return nums.length;
    }
}
