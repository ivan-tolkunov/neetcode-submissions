class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim();
        s = s.split(" ");

        return s[s.length - 1].length;
    }
}
