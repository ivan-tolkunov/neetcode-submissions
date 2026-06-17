class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const dp = Array(n + 1).fill(0);

        for (let i = 0; i <= n; i++) {
            dp[i] = dp[i >> 1] + (i % 2);
        }

        return dp;
    }
}
