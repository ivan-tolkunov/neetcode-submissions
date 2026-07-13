class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length > t.length) {
            return false;
        }

        let index = 0;
        
        for (let right = 0; right < t.length; right++) {
            if (s[index] === t[right]) {
                index++;
            }
            if (index >= s.length) {
                return true;
            }
        }

        return index >= s.length;
    }
}
