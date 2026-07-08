class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = [];

        const rows = grid.length;
        const cols = grid[0].length;
        let fruits = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        for(let row = 0; row < rows; row++) {
           for(let col = 0; col < cols; col++) {
                if (grid[row][col] === 2) {
                    q.push([row, col]);
                } else if (grid[row][col] === 1) {
                    fruits++;
                }
           } 
        }


        let time = 0;
        let head = 0;


        while (head < q.length && fruits > 0) {
            const levelSize = q.length - head;

            for (let i = 0; i < levelSize; i++) {
                const [row, col] = q[head++];

                for (const [dx, dy] of directions) {
                    const nr = row + dx;
                    const nc = col + dy;

                    if (
                        nr < 0 || nr >= rows ||
                        nc < 0 || nc >= cols ||
                        grid[nr][nc] !== 1
                    ) {
                        continue;
                    }

                    grid[nr][nc] = 2;
                    fruits--;
                    q.push([nr, nc]);
                }
            }

            time++;
        }

        return fruits === 0 ? time : -1;
    }
}
