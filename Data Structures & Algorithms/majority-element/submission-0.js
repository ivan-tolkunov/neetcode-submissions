class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a, b) => Number(a) - Number(b));

        return nums[Math.floor(nums.length / 2)];
    }
}
