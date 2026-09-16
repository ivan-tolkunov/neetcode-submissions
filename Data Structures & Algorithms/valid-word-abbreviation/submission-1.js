class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        if (word === abbr) {
            return true;
        }

        let j = 0;

        for (let i = 0; i < abbr.length; i++) {
            if (!this.isLetter(abbr[i])) {
                if (abbr[i] === '0') {
                    return false;
                }

                let endIndex = i;

                while (!this.isLetter(abbr[endIndex]) && endIndex !== abbr.length - 1) {
                    endIndex++;
                }

                endIndex = i === endIndex ? endIndex + 1 : endIndex;
                

                const num = Number(abbr.slice(i, endIndex));

                i = endIndex;
                j += num;
            }

            if (j > word.length) {
                return false;
            }

            if (word[j] !== abbr[i]) {
                return false;
            }

            j++;
        } 

        return true;
    }

    isLetter(ch) {
        return ch !== ch.toUpperCase(); 
    }
}
