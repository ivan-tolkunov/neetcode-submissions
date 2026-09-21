class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        let col = 0;
        let row = 0;

        let size = 0;

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].split("");
            size = Math.max(size, words[i].length);
        }

        size = Math.max(size, words.length);


        for (let i = 0; i < size; i++) {
            if (!words[i]) {
                words.push([]);
            }

            const len = size - words[i].length;
            for (let j = 0; j < len; j++) {
                words[i].push("");
            }
        }

        while(col < size && row < words.length) {
            for (let i = 0; i < size; i++) {
                if (words[i][row] !== words[col][i]) {
                    return false;
                }
            }

            col++;
            row++;
        }

        return true;
    }
}
