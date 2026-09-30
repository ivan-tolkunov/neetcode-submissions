class Solution {
    constructor() {
       this.res = []; 
    }
    /**
     * @param {number} n
     * @return {string[][]}
     */
    
    solveNQueens(n) {
        const board = Array.from({length: n}, () => Array.from({length: n}).fill('.'));

        this.backtracking(board, 0);

        return this.res;
    }

    backtracking(board, r) {
        if (r === board.length) {
            this.res.push(board.map((row) => row.join('')));
            return;
        }

        for (let i = 0; i < board.length; i++) {
            if (this.isSafe(board, r, i)) {
                board[r][i] = 'Q';
                this.backtracking(board, r + 1);
                board[r][i] = '.'
            }
        }
    }

    isSafe(board, x, y) {
        if (x < 0 || y < 0 || x >= board.length || y >= board.length) {
            return false;
        }

        if (board[x][y] === 'Q') {
            return false;
        }

        for (let i = 0; i < board.length; i++) {
            if (board[i][y] === 'Q') {
                return false;
            }

            if (board[x][i] === 'Q') {
                return false;
            }

            if (x + i < board.length && y + i < board.length) {
                if (board[x + i][y + i] === 'Q') {
                    return false;
                }
            } 

            if (x + i < board.legngth && y - i >= 0) {
                if (board[x + i][y - i] === 'Q') {
                    return false;
                }
            }

            if (x - i >= 0 && y + i < board.length) {
                if (board[x - i][y + i] === 'Q') {
                    return false;
                }
            }

            if (x - i >= 0 && y - i >= 0) {
                if (board[x - i][y - i] === 'Q') {
                    return false;
                }
            }
        }

        return true;
    }
}
