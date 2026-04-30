class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;
        let curr = 0;
        for (let num of nums) {
            curr = Math.max(curr, 0);
            curr += num;
            max = Math.max(max, curr);
        }

        return max;
    }
}
