class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = left +  Math.floor((right - left) / 2);

            let value = nums[mid];

            if (value > target) {
                right = --mid;
            }else if (value < target) {
                left = ++mid;
            } else {
                return mid;
            }
            
        }

        return -1;
    }
}
