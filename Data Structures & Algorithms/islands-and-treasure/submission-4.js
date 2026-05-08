class Solution {
    /**
     * @param {number[][]} grid
     */
    INF = 2147483647;
    ROWS;
    COLS;
    directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    grid;

    islandsAndTreasure(grid) {
        this.ROWS = grid.length;
        this.COLS = grid[0].length;
        this.grid = grid;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (this.grid[row][col] === this.INF) {
                    this.grid[row][col] = this.bfs(row, col);
                }
            }
        }

        return this.grid;
    }

    bfs(row, col) {
        const q = new Queue();
        let visited = Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(false));
        let steps = 0;

        q.push([row, col]);

        while (!q.isEmpty()) {
            const size = q.size();

            for (let i = 0; i < size; i++) {
                const [r, c] = q.pop();

                visited[r][c] = true;

                if (this.grid[r][c] === 0) {
                    return steps;
                }

                for (let [dx, dy] of this.directions) {
                    const rdx = r + dx;
                    const cdy = c + dy;

                    if (
                        rdx >= this.ROWS ||
                        rdx < 0 ||
                        cdy >= this.COLS ||
                        cdy < 0 ||
                        visited[rdx][cdy] ||
                        this.grid[rdx][cdy] === -1
                    ) {
                        continue;
                    }

                    visited[rdx][cdy] = true;
                    q.push([rdx, cdy]);
                }
            }
            steps++;
        }

        return this.INF;
    }
}
