class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (row, col) => {
            if (
                row < 0 || row >= rows ||
                col < 0 || col >= cols ||
                board[row][col] !== "O"
            ) {
                return;
            }

            board[row][col] = "#";

            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };

        for (let r = 0; r < rows; r++) {
            dfs(r, 0);
            dfs(r, cols - 1);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c);
            dfs(rows - 1, c);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O") board[r][c] = "X";
                if (board[r][c] === "#") board[r][c] = "O";
            }
        }
    }
}
