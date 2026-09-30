class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const arrP = Array.from({length: rows}, () => Array(cols).fill(false));
        const arrA = Array.from({length: rows}, () => Array(cols).fill(false));

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        function dfs(state, r, c) {
            state[r][c] = true;

            for (let [x, y] of directions) {
                const rx = r + x;
                const cy = c + y;

                if (rx >= 0 && cy >= 0 && rx < rows && cy < cols && !state[rx][cy] && heights[r][c] <= heights[rx][cy]) {
                   dfs(state, rx, cy); 
                }
            }
        }

        for (let row = 0; row < rows; row++) {
           dfs(arrP, row, 0);
           dfs(arrA, row, cols - 1); 
        }

        for (let col = 0; col < cols; col++) {
           dfs(arrP, 0, col);
           dfs(arrA, rows - 1, col); 
        }

        const res = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (arrP[row][col] && arrA[row][col]) {
                    res.push([row, col]);
                }
            }
        }

        return res;
    }
}
