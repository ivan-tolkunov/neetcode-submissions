class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = '';

        for (let i = 0; i < strs[0].length; i++) {
            const root = strs[0][i];
            let j = 0;

            while(j < strs.length && i < strs[j].length && strs[j][i] === root) {
                j++;
            }

            if (j !== strs.length) {
                return res;
            }

            res += root;
        }


        return res;
    }
}
