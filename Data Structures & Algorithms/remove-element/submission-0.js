class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length === 0) {
            return 0;
        }

        let count = 0;

        for(let i = 0; i < nums.length; i++) {
            const el = nums[i];
            if (el === val) {
                count++;
                let c = i;
                let j = i + 1;
                i--;
                while (j < nums.length) {
                    nums[c] = nums[j];
                    j++;
                    c++;
                }
            }
        }

        return nums.length - count;
    }
}
