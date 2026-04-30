class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const cache = new Map();
        function dfs(r, c) {
            if (r === m || c === n) {
                return 0;
            }

            const key = `${r},${c}`;

            if (cache.has(key)) {
                return cache.get(key);
            }

            if (r === m - 1 && c === n - 1) {
                return 1;
            }

            const memo = dfs(r + 1, c) + dfs(r, c + 1);

            cache.set(key, memo);

            return memo;
        }

        return dfs(0, 0);
    }
}
