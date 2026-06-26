class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let max = 0;
        let res = "";

        for (let i = 0; i < s.length; i++) {

            let left = i;
            let right = i + 1;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            let len = right - left - 1;

            if (len > max) {
                max = len;
                res = s.substring(left + 1, right);
            }

            left = i;
            right = i;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            len = right - left - 1;

            if (len > max) {
                max = len;
                res = s.substring(left + 1, right);
            }
        }

        return res;    
    }
}
