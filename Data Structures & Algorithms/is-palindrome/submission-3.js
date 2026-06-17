class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        s = s.toLowerCase();

        while (l < r) {
            while(l < s.length && !this.isValidChar(s[l])) {
                l++;
            }
            while (r >= 0 && !this.isValidChar(s[r])) {
                r--;
            }

            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }

    isValidChar(ch) {
        const ascii = ch.charCodeAt(0);

        if (ascii >= 48 && ascii <= 57) {
            return true;
        } 
        if (ascii >= 97 && ascii <= 122) {
            return true;
        }

        return false;
    }
}
