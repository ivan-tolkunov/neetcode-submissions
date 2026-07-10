class Solution {
    constructor() {
        this.directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];
        this.grid = [];
        this.rows = 0;
        this.cols = 0;
    } 

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;

        for (let row = 0; row < this.rows; row++) {
           for (let col = 0; col < this.cols; col++) {
                if (grid[row][col] === 1) {
                    return this.dfs(row, col);
                }
           }
        }

        return 0;
    }

    dfs(row, col) {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols || this.grid[row][col] === 0) {
            return 1;
        }

        if (this.grid[row][col] === -1) {
            return 0;
        }

        let res = 0;
        this.grid[row][col] = -1;

        for (let [dx, dy] of this.directions) {
            res += this.dfs(row + dx, col + dy);
        }


        return res;
    }
}
