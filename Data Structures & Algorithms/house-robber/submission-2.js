class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Map();

        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }
            if (memo.has(i)) {
                return memo.get(i);
            }

            const sum = Math.max(dfs(i + 1), nums[i] + dfs(i + 2));

            memo.set(i, sum);

            return sum;
        };

        return dfs(0);
    }
}
