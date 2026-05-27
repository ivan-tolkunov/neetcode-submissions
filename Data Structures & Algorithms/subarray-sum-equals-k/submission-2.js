class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefix = new Map();
        let sum = 0;
        let count = 0;
        prefix.set(0, 1);

        for (let num of nums) {
            sum += num;
            const amount = prefix.get(sum - k) ?? 0;
            count += amount;
            prefix.set(sum, (prefix.get(sum) ?? 0) + 1);
        }

        return count;
    }
}
