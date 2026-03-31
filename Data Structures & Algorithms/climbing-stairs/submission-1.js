class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.dfs(n,  0);
    }

    dfs (n,  current) {
        if (current >= n) {
            return current === n ? 1 : 0;
        }

        return this.dfs(n, current + 1) + this.dfs(n, current + 2);
    }
}
