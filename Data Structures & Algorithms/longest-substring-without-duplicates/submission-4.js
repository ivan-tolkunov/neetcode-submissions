class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let count = 0;

        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

            set.add(s[r]);
            count = Math.max(count, set.size);
        }

        return count;
    }
}
