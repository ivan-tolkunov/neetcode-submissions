class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const backtrack = (start, comb) => {
            if (comb.length === k) {
                res.push([...comb]);
                return;
            }

            for (let i = start; i <= n; i++) {
                comb.push(i);
                backtrack(i + 1, comb);
                comb.pop();
            }
        };

        backtrack(1, []);
        return res;
    }
}
