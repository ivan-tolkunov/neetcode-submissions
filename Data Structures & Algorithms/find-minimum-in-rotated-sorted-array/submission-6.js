class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let min = Math.min(nums[left], nums[right]);

        while (left < right) {
            let mid = Math.floor(left + ((right - left) / 2));
            min = Math.min(nums[mid], min);

            if (nums[left] > nums[right] && nums[mid] > nums[right]) {
                left = mid + 1;
                min = Math.min(nums[left], min);
            } else {
                right = mid;
            }
        }

        return min;
    }
}
