class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */

    exist(board, word) {
        this.ROWS = board.length;
        this.COLS = board[0].length;

        for (let row = 0; row < this.ROWS; row++) {
           for (let col = 0; col < this.COLS; col++) {
                if (board[row][col] === word[0]) {
                    const isAWord = this.isAWord(row, col, "", word, 0, board);

                    if (isAWord) {
                        return true;
                    }
                }
           }
        }

        return false;
    }

    isAWord(row, col,  curS, word, pos, board) {
        if (row < 0 || row >= this.ROWS || col < 0 || col >= this.COLS || pos >= word.length || board[row][col] !== word[pos]) {
            return false;
        }

        const tmp = board[row][col];

        curS += tmp;
        pos += 1;
        board[row][col] = '-';

        if (word === curS) {
            return true;
        }

        const isAWord =  this.isAWord(row + 1, col, curS, word, pos, board) ||
                        this.isAWord(row - 1, col, curS, word, pos, board) ||
                        this.isAWord(row, col + 1, curS, word, pos, board) ||
                        this.isAWord(row, col - 1, curS, word, pos, board)
        
        board[row][col] = tmp;

        return isAWord;
    }
}
