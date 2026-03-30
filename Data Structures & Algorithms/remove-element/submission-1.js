class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let len = nums.length;

        if (len === 0) {
            return 0;
        }

        let l = 0;
        let r = 0;

        while(r < len) {
            if (nums[r] !== val) {
                nums[l] = nums[r];
                l++;
            }
            r++;
        }

        return l;
    }
}
