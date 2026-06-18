class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const key = this.wordToKey(str);
            const arr = map.get(key) ?? [];
            arr.push(str);
            map.set(key, arr);
        }

        const res = [];

        for (let [key, val] of map) {
            res.push(val);
        }

        return res;
    }

    wordToKey(word) {
        let key = Array(26).fill(0);

        for (let ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            key[index] += 1; 
        }

        return key.toString();
    }
}
