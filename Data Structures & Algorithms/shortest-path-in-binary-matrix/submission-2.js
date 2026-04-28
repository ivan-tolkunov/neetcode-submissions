class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
            return -1;
        }

        const q = new Queue();
        const visited = new Set();
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1]
        ];

        let length = 1;

        q.push([0, 0]);
        visited.add(`${0},${0}`);

        while (!q.isEmpty()) {
            const size = q.size();

            for (let i = 0; i < size; i++) {
                const node = q.pop();

                if (node[0] === rows - 1 && node[1] === cols - 1) {
                    return length;
                }

                for (let [dr, dc] of directions) {
                    const r = node[0] + dr;
                    const c = node[1] + dc;
                    const key = `${r},${c}`;

                    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 1 || visited.has(key)) {
                        continue;
                    }


                    visited.add(key);
                    q.push([r, c]);
                }
            }
            
            length++;
        }

        return -1;
    }
}
