class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Map();

        function dfs(i, cur) {
            if (i >= nums.length) {
                return cur;
            }

            const key = `${i},${cur}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            const res = Math.max(dfs(i + 2, cur + nums[i]),  dfs(i + 1, cur));

            memo.set(key, res);

            return res;
        }

        return dfs(0, 0);
    }
}
