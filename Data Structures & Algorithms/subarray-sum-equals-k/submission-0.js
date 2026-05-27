class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefix = [];
        let sum = 0;

        for (let num of nums) {
            sum += num;
            prefix.push(sum);
        }

        let count = 0;

        for (let i = 0; i < prefix.length; i++) {
            if (prefix[i] === k) {
                count++;
            }

            for (let j = i + 1; j < prefix.length; j++) {
                const sum = prefix[j] - prefix[i];
                if (sum === k) {
                    count++;
                }
            }
        }

        return count;
    }
}
