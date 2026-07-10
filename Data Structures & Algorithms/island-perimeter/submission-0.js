class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let perimeter = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 0) {
                    continue;
                }

                if (row - 1 < 0 || grid[row - 1][col] === 0) {
                    perimeter++;
                }  

                if (row + 1 >= rows || grid[row + 1][col] === 0) {
                    perimeter++;
                }

                if (col - 1 < 0 || grid[row][col - 1] ===  0) {
                    perimeter++;
                }

                if (col + 1>= cols || grid[row][col + 1] === 0) {
                    perimeter++;
                }
            }
        }

        return perimeter;
    }
}
