class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 3) {
            return n;
        }

        const res = Array(n + 1).fill(0);
        res[0] = 0;
        res[1] = 1;
        res[2] = 2;

        for (let i = 3; i <= n; i++) {
            res[i] = res[i - 1] + res[i - 2];
        }

        return res[n];
    }
}
