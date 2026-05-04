class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const sufix = new Array(nums.length);
        const prefix = new Array(nums.length);

        sufix[0] = 1;
        prefix[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i++) {
            sufix[i] = nums[i - 1] * sufix[i - 1];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            prefix[i] = nums[i + 1] * prefix[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = sufix[i] * prefix[i];
        }

        return nums;
    }
}
