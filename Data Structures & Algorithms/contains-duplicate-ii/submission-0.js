class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            while (Math.abs(i - j) <= k) {
                if (nums[j] === nums[i]) {
                    return true;
                }
                j++;
            }
        }

        return false;
    }
}
