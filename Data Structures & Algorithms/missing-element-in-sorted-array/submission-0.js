class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = right - Math.floor((right - left) / 2);

            if (nums[mid] - nums[0] - mid < k) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        return nums[0] + k + left;
    }
}
