class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;

        let left = 0;
        let right = 0;

        let sub = '';

        while (right < s.length) {
            const c = s.charAt(right);

            while (sub.indexOf(c) !== -1) {
                left += 1;
                sub = s.slice(left, right);
            }

            sub += c;
            right++;

            max = Math.max(max, sub.length);
        }

        return max;
    }
}
