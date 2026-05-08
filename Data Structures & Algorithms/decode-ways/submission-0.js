class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // 1 - 26
    numDecodings(s) {
        const cache = new Map();

        function dfs (i) {
            if (i === s.length) {
                return 1;
            }

            if (s[i] === '0') {
                return 0;
            }

            if (cache.has(i)) {
                return cache.get(i);
            }


            let res = dfs(i + 1);

            if (i + 1 < s.length && s.slice(i, i + 2) <= 26) {
                res += dfs(i + 2);
            }

            cache.set(i, res);

            return res;
        }

        return dfs(0);
    }

}
