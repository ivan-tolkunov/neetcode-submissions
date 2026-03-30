class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const strMap = new Map();
        const result = [];

        for(let i = 0; i < strs.length; i ++) {
            const el = strs[i];
            const sortedWord = el.split('').sort().join('');
            if (strMap.has(sortedWord)) {
                const words = strMap.get(sortedWord);
                strMap.set(sortedWord, [...words, el]);
            } else {
                strMap.set(sortedWord, [el]);
            }
        }
       strMap.forEach((value, key) => result.push(value));

       return result;
    }
}
