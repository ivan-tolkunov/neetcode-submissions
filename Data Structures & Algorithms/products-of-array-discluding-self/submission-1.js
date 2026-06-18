class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];

        const prefix = Array(nums.length).fill(1);
        const sufix = Array(nums.length).fill(1);

        let i = 1;
        let j = nums.length - 2;

        while (i < nums.length) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
            sufix[j] = sufix[j + 1] * nums[j + 1];
            i++;
            j--;
        }

        for (let i = 0; i  < nums.length; i++) {
            res.push(prefix[i] * sufix[i]);
        }

        return res;
    }
}