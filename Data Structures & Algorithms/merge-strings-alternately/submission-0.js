class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l = 0;
        let r = 0;
        let res = '';

        while (l < word1.length && r < word2.length) {
            res += word1[l] + word2[r];
            l++;
            r++;
        }

        if (l === word1.length) {
            return res + word2.slice(r, word2.length);
        } else {
            return res + word1.slice(l, word1.length);
        }
    }
}
