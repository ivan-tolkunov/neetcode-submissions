class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (mid > 0 && nums[mid] < nums[mid - 1]) {
                r = mid - 1;
            } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
                l = mid + 1;
            } else {
                return mid;
            }
        }
    }
}
