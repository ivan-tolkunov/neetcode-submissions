class DSU {
    constructor(n) {
        this.parents = Array(n + 1).fill(0).map((_, i) => i);
        this.size = Array(n + 1).fill(1);
    }

    find(node) {
        if (this.parents[node] !== node) {
            this.parents[node] = this.find(this.parents[node]);
        }

        return this.parents[node];
    }

    union(u, v) {
        const findU = this.find(u);
        const findV = this.find(v);

        if (findU === findV) {
            return;
        }

        if (this.size[findU] >= this.size[findV]) {
            this.parents[findV] = findU;
            this.size[findU] += this.size[findV];
        } else {
            this.parents[findU] = findV;
            this.size[findV] += this.size[findU];
        }
    }

    getSize(node) {
        return this.size[this.find(node)];
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const sdu = new DSU(rows * cols);

        const dir = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        let res = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 1) {
                    const indexU = row * cols + col;

                    for (let [dx, dy] of dir) {
                        const dRow = row + dx;
                        const dCol = col + dy;

                        if (dRow < 0 || dRow >= rows || dCol < 0 || dCol >= cols || grid[dRow][dCol] !== 1) {
                            continue;
                        }

                        const indexV = dRow * cols + dCol;

                        sdu.union(indexU, indexV);
                    }
                    res = Math.max(res, sdu.getSize(indexU));
                }
            }
        }

        return res;
    }
}
