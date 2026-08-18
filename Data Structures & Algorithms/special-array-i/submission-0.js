class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if (nums.length === 1) {
            return true;
        }

        for (let i = 0; i < nums.length - 1; i++) {
            const res = nums[i] + nums[i + 1];

            if (res % 2 === 0) {
                return false;
            }
        }

        return true;
    }
}
