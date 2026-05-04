class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;

        let left = 0;
        let right = 0;

        const set = new Set();

        while (right < s.length) {
            const c = s.charAt(right);

            while (set.has(c)) {
                set.delete(s.charAt(left));
                left++;
            }

            set.add(c);
            right++;

            max = Math.max(max, right - left);
        }

        return max;
    }
}
