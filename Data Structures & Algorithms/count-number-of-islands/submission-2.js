class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let count = 0;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === '1') {
                    dfs(row, col);
                    count++;
                }
            }
        }

        function dfs(row, col) {
            if (row < 0 || row >= ROWS || col < 0 || col >= COLS || grid[row][col] !== "1") {
                return;
            }

            grid[row][col] = '0';

            for (let [dx, dy] of directions) {
                dfs(row + dx, col + dy);
            }
        }

        return count;
    }
}
