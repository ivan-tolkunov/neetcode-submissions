class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let size = nums.length;

        for (let i = 0; i < size; i++) {
            nums.push(nums[i]);
        }

        return nums;
    }
}
