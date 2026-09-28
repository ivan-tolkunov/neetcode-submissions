class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === nums[mid + 1]) {
                mid--;
            }

            if ((mid - left) % 2 === 0) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return nums[left];
    }
}
