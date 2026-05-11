class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = board.length;
        const cols = board[0].length;

        const  blockMap = new Set();
        const rowsMap = new Set();
        const colsMap = new Set();
        

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const el = board[row][col];

                if (el === '.') {
                    continue;
                }

                const blockKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}:${el}`;
                const rowsKey = `${row}:${el}`;
                const colsKey = `${col}:${el}`;

                if (blockMap.has(blockKey) || rowsMap.has(rowsKey) || colsMap.has(colsKey)) {
                    return false;
                }

                blockMap.add(blockKey);
                rowsMap.add(rowsKey);
                colsMap.add(colsKey);
            }
        }

        return true;
    }
}
