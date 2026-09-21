class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        const map = new Map();

        for (let ch of s) {
            let count = map.get(ch) ?? 0;
            map.set(ch, ++count);
        }

        let notEven = 0;

        for (let [key, value] of map) {
            if (value % 2 !== 0) {
                notEven++;
            }
        }

        return notEven <= 1;
    }
}
