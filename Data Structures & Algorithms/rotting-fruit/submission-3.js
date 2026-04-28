class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;



        let time = -1;

        const q = new Queue();

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ]

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }


        while (!q.isEmpty()) {
            const size = q.size() ;

            for (let i = 0; i < size; i++) {
                const [row, col] = q.pop();

                for (let [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] !== 1) {
                        continue;
                    }

                    q.push([nr, nc]);
                    grid[nr][nc] = 0;
                }
            }

            time++;
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    return -1;
                }
            }
        }

        return time > 0 ? time : 0;
    }
}
