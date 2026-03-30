class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let k = 0;

        for (let j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[k]) {
                k++;
                nums[k] = nums[j];
            }
        }

        return k + 1;
    }
}