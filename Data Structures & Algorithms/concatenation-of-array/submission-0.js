class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = Array(nums.length * 2);
        const ansLen = nums.length;

        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
            ans[i + ansLen] = nums[i];
        }

        return ans;
    }
}
