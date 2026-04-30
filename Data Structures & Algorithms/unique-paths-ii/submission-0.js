class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const cache = new Map();

        function dfs(r, c) {
            if (r === rows || c === cols || grid[r][c] === 1) {
                return 0;
            }

            const key = `${r},${c}`;

            if (cache.has(key)) {
                return cache.get(key);
            }

            if (r === rows - 1 && c === cols - 1) {
                return 1;
            }

            const memo = dfs(r + 1, c) + dfs(r, c + 1);

            cache.set(key, memo);

            return memo;
        }

        return dfs(0, 0);
    }
}
