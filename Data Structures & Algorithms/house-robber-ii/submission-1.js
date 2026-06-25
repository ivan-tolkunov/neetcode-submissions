class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        
        const memo = new Map();

        function dfs(i, end) {
            if (i >= end) {
                return 0;
            }

            const key = `${i},${end}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            const rob = nums[i] + dfs(i + 2, end);
            const skip = dfs(i + 1, end);

            const res = Math.max(rob, skip);

            memo.set(key, res);

            return res;
        }

        return Math.max(dfs(0, nums.length - 1), dfs(1, nums.length));
    }
}
