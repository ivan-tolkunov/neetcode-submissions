class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const subset = [];
        function dfs(i) {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }
            subset.push(nums[i]);
            i += 1;
            dfs(i);
            subset.pop();
            dfs(i);
        }

        dfs(0);

        return res;
    }
}
