class Trie {
    constructor() {
        this.children = Array(26).fill(null); 
        this.isWord = false;
        
    }

    put(word) {
        let layer = this; 
        for (let ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);

            if (!layer.children[index]) {
                layer.children[index] = new Trie();
            }

            layer = layer.children[index];
        }

        layer.isWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new Trie();

        for (let word of words) {
            trie.put(word);
        }

        const res = [];

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const ch = board[row][col];
                const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);

                if (trie.children[index]) {
                    this.backtracking(board, row, col, trie, res, '');
                }
            }
        }

        return res;
    }

    backtracking(board, row, col, trie, arr, word) {
       const ROWS = board.length;
       const COLS = board[0].length;

       if (row < 0 || row >= ROWS || col < 0 || col >= COLS || board[row][col] === '#') {
            return;
       }

       const index = board[row][col].charCodeAt(0) - 'a'.charCodeAt(0);

       if (!trie.children[index]) {
            return;
       }

       const tmp = board[row][col];
       board[row][col] = "#";
       word += tmp;

       trie = trie.children[index];

       if (trie.isWord) {
            arr.push(word);
            trie.isWord = false;
       }

       this.backtracking(board, row +1, col, trie, arr, word);
       this.backtracking(board, row - 1, col, trie, arr, word);
       this.backtracking(board, row, col + 1, trie, arr, word);
       this.backtracking(board, row, col - 1, trie, arr, word);

       board[row][col] = tmp;
    }
}
