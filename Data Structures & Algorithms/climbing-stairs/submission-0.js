class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 0) {
            return 1;
        }

        if (n < 0) {
            return 0;
        }

        return this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }
}
