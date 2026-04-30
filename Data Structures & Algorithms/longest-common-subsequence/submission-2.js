class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const cache = new Map();
        function dfs(i, j) {
            if (i === text1.length || j === text2.length) {
                return 0;
            }

            const key = `${i},${j}`;

            if (cache.has(key)) {
                return cache.get(key);
            }

            if (text1[i] === text2[j]) {
                return 1 + dfs(i+ 1, j + 1);
            }


            const memo = Math.max(dfs(i + 1, j), dfs(i, j + 1));

            cache.set(key, memo);

            return memo;
        }

        return dfs(0, 0);
    }
}
