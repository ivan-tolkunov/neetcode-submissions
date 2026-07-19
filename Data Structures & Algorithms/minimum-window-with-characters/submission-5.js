class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return "";
        }

        const ruleMap = new Map();
        let rule = 0;

        for (let ch of t) {
            let count = ruleMap.get(ch) ?? 0;

            if (count === 0) {
                rule++;
            }

            ruleMap.set(ch, count + 1);
        }

        let windowMap = new Map();
        let window = 0;

        let left = 0;
        let right = 0;

        let bestLeft = 0;
        let bestLen = Infinity;

        while (right < s.length) {
            let count = (windowMap.get(s[right]) ?? 0) + 1;

            windowMap.set(s[right], count);

            if (ruleMap.has(s[right]) && windowMap.get(s[right]) === ruleMap.get(s[right])) {
                window++;
            }

            while (rule === window) {
                const len = right - left + 1;

                if (len < bestLen) {
                    bestLeft = left;
                    bestLen = len;
                }

                count = windowMap.get(s[left]) - 1;
                windowMap.set(s[left], count);

                if (count < (ruleMap.get(s[left]) ?? 0)) {
                    window--;
                }

                left++;
            }

            right++;
        }

        if (bestLen === Infinity) {
            return "";
        }

        return s.slice(bestLeft, bestLeft + bestLen);
    }
}
