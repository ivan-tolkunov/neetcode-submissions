class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const variation = [];

        function dfs(index, currentSum) {
            if (currentSum > target || index >= nums.length) {
                return;
            } 
            if (currentSum === target && !res.includes(variation)) {
                res.push([...variation]);
                return;
            }

            variation.push(nums[index]);
            dfs(index,  currentSum + nums[index]);

            variation.pop();
            dfs(index + 1,  currentSum);
        }

        dfs(0, 0);

        return res;
    }
}
