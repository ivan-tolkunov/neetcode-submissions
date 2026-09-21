class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let res = 0;

        for (let i = 1; i < s.length; i++) {
            const code1 = s.charCodeAt(i);
            const code2 = s.charCodeAt(i - 1);
            const dif = Math.abs(code1 - code2);

            res += dif;
        }

        return res;
    }
}
