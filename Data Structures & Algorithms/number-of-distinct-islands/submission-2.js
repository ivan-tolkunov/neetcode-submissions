class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    grid = [];
    numDistinctIslands(grid) {
        const islands = new Set();
        this.grid = grid;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (this.grid[row][col] === 1) {
                    let form = this.islandBuilder(col, row, 0, 0, '');
                    islands.add(form);
                }
            }
        }

        return islands.size;
    }

   islandBuilder(col, row, x, y, form) {
        const rows = this.grid.length;
        const cols = this.grid[0].length;

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

        if (col < 0 || row < 0 || rows <= row || cols <= col || this.grid[row][col] === 0) {
            return "";
        }

        const key = `${x},${y}|`;
        form += key;
        this.grid[row][col] = 0;

        for (let [dr, dc] of directions) {
            form += this.islandBuilder(col + dc, row + dr, x + dr, y + dc, form);
        }

        return form;
   } 
}
