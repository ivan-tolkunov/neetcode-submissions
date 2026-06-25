class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const rule = new Map();

        for (let ch of t) {
            rule.set(ch, (rule.get(ch) ?? 0) + 1);
        }

        const window = new Map();

        let left = 0;
        let have = 0;
        const need = rule.size;

        let res = "";
        let resLen = Infinity;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            window.set(ch, (window.get(ch) ?? 0) + 1);

            if (rule.has(ch) && window.get(ch) === rule.get(ch)) {
                have++;
            }

            while (have === need) {
                const len = right - left + 1;

                if (len < resLen) {
                    res = s.slice(left, right + 1);
                    resLen = len;
                }

                const leftCh = s[left];

                if (rule.has(leftCh) && window.get(leftCh) === rule.get(leftCh)) {
                    have--;
                }

                window.set(leftCh, window.get(leftCh) - 1);
                left++;
            }
        }

        return res;
    }
}