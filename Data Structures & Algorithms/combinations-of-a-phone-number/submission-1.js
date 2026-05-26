class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */

    alphabet = 'abcdefghijklmnopqrstuvwxyz';
    res = [];

    letterCombinations(digits) {
        if (digits.length === 0) {
            return this.res;
        }

        const map = new Map();
        let index = 0;

        for (let i = 2; i <= 9; i++) {
            let val = '';

            if (i === 7 || i === 9) {
                val = this.alphabet.slice(index, index + 4);
                index += 4;
            } else {
                val = this.alphabet.slice(index, index + 3);
                index += 3;
            }

            map.set(`${i}`, val);
        }

        this.backtrack(digits, 0, '', map);

        return this.res;
    }

    backtrack(digits, i, str, map) {
        if (str.length === digits.length) {
            this.res.push(str);
            return;
        }

        const variations = map.get(digits[i]);

        for (let ch of variations) {
            this.backtrack(digits, i + 1, str + ch, map);
        }
    }
}
