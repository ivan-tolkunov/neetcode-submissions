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
            if (!ruleMap.has(ch)) {
                rule++;
                ruleMap.set(ch, 0);
            }

            ruleMap.set(ch, ruleMap.get(ch) + 1);
        }

        let left = 0;
        const windowMap = new Map();
        let window = 0;

        let bestLeft = 0;
        let bestLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            let count = windowMap.get(s[right]) ?? 0;

            windowMap.set(s[right], count + 1);

            if (ruleMap.has(s[right]) && windowMap.get(s[right]) === ruleMap.get(s[right])) {
                window++;
            }

            while (window === rule) {
                if (right - left + 1 < bestLength) {
                    bestLeft = left;
                    bestLength = right - left + 1;
                }

                count = windowMap.get(s[left]) - 1;

                windowMap.set(s[left], count);

                if (ruleMap.has(s[left]) && windowMap.get(s[left]) < ruleMap.get(s[left])) {
                    window--;
                }

                left++;
            }
        }

        if (bestLength === Infinity) {
            return "";
        }

        return s.slice(bestLeft, bestLeft + bestLength);
    }
}
