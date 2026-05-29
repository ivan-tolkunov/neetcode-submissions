class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        function backtracking(idx, arr) {
            if (arr.length === idx) {
                res.push([...arr]);
                return;
            }

            for (let i = idx; i < arr.length; i++) {
                [arr[idx], arr[i]] = [arr[i], arr[idx]];
                backtracking(idx + 1, arr);
                [arr[idx], arr[i]] = [arr[i], arr[idx]];
            }
        }

        backtracking(0, nums);
        return res;
    }
}
