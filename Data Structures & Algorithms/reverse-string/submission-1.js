class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let r = s.length - 1;
        for (let l = 0; l < Math.floor(s.length / 2); l++) {
            [s[l], s[r - l]] = [s[r - l], s[l]];
        }
    }
}
