class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        let countL = 0;

        while (l < r && countL < 2) {
            while (s[l] !== s[r]) {
                countL++;
                l++;
            }

            l++;
            r--;
        }

        l = 0;
        r = s.length - 1;
        let countR = 0;

        while (l < r && countR <2) {
            while (s[l] !== s[r]) {
                r--;
                countR++;
            }

            l++;
            r--;
        }

        return countR < 2 || countL < 2;
    }
}
