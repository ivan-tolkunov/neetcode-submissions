class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];

        let maxEnding = nums[0];
        let minEnding = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];

            const prevMax = maxEnding;
            const prevMin = minEnding;

            maxEnding = Math.max(num, num * prevMax, num * prevMin);
            minEnding = Math.min(num, num * prevMax, num * prevMin);

            res = Math.max(res, maxEnding);
        }

        return res;
    }
}