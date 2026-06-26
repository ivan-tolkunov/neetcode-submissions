class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let cache = new Map();

        function rec(i) {
            if (cache.has(i)) {
                return cache.get(i);
            }

            if (s[i] === '0') {
                return 0;
            }

            if (i === s.length) {
                return 1;
            }

            let res = rec(i + 1);

            if (i + 1 < s.length && Number(s.slice(i, i + 2) < 27)) {
                res += rec(i + 2);
            }

            cache.set(i, res);

            return res;
        }

        return rec(0);
    }

}