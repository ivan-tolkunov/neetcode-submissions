class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    map = new Map();
    climbStairs(n) {
        if (this.map.has(n)) {
            return this.map.get(n);
        }

        if (n === 0) {
            return 1;
        }

        if (n < 0) {
            return 0;
        }

        const res = this.climbStairs(n - 1) + this.climbStairs(n - 2);
        this.map.set(n, res);
        return res;
    }
}
