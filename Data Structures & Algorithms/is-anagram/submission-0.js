class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const rules = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            const aCode = 'a'.charCodeAt(0);
            const indexS = s[i].charCodeAt(0) - aCode;
            const indexT = t[i].charCodeAt(0) - aCode;
            rules[indexS] += 1;
            rules[indexT] -= 1;
        }

        for (let rule of rules) {
            if (rule !== 0) {
                return false;
            }
        }

        return true;
    }
}
