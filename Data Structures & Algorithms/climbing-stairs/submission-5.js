class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    // base cases 1 and 2
    climbStairs(n) {
        const map = new Map();

        return this.memo(n, map);
    }

    memo(n, cache) {
        if (n < 3) {
            return n;
        }

        if (cache.has(n)) {
            return cache.get(n);
        }

        const value = this.memo(n - 1, cache) + this.memo(n - 2, cache);

        cache.set(n, value);

        return value;
    }
}
