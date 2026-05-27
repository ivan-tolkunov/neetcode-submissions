class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefix = [];
        let sum = 0;

        for (let num of nums) {
            sum += num;
            prefix.push(sum);
        }

        for (let i = 0; i < nums.length; i++) {
            const sum = prefix[nums.length - 1] - prefix[i];

            if ((prefix[i - 1] ?? 0) === sum) {
                return i;
            }
        }

        return -1;
    }
}
