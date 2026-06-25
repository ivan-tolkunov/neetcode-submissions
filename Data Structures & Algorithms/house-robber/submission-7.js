class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Map();

        function dfs(i) {
            if (i >= nums.length) {
                return 0;
            }

            if (memo.has(i)) {
                return memo.get(i);
            }

            const rob = nums[i] + dfs(i + 2);
            const skip = dfs(i + 1);

            const res = Math.max(rob, skip);

            memo.set(i, res);

            return res;
        }

        return dfs(0);
    }
}
