class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1) {
                    const size = this.dfs(grid, r, c, 0);
                    max = Math.max(size, max);
                }
            }
        }

        return max;

    }

    dfs(grid, r, c) {
        const rows = grid.length;
        const cols = grid[0].length;

        if (r === rows || c === cols || c < 0 || r < 0 || grid[r][c] !== 1) {
            return 0;
        }

        grid[r][c] = 0;

        return (1 + this.dfs(grid, r + 1, c) + this.dfs(grid, r - 1, c) + this.dfs(grid, r, c + 1) + this.dfs(grid, r, c - 1));
    }
}
