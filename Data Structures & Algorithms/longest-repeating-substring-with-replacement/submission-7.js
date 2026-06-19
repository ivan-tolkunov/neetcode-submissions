class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const set = new Set();

        for (let ch of s) {
            set.add(ch);
        }

       for(let ch of set) {
            let rule = k;

            let start = 0;
            let end = 0;

            while (end < s.length) {
                if (s[end] !== ch) {
                    rule--;
                }
                
                while (rule < 0) {
                    if (s[start] !== ch) {
                        rule++;
                    }
                    start++;
                }
                end++;

                res = Math.max(res, end - start);
            }
       } 

        return res;
    }
}
