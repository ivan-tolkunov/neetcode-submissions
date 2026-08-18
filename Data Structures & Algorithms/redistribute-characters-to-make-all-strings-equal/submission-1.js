class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        const chars = {};

        for (let word of words) {
            for (let ch of word) {
                chars[ch] = (chars[ch] ?? 0) + 1
            }
        }

        for (let count of Object.values(chars)) {
            if (count % words.length !== 0) {
                return false;
            }
        }

        return true;
    }
}
