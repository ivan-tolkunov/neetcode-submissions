class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const rule = new Map();

        for (let ch of s1) {
            let count = rule.get(ch) ?? 0;
            count++;
            rule.set(ch, count);
        }

        for (let i = 0; i < s2.length; i++) {
            let j = i;
            const window = new Map();
            let streak = 0;

            while (rule.has(s2[j])) {
                let count = window.get(s2[j]) ?? 0;
                count++;
                window.set(s2[j], count);

                if (count > rule.get(s2[j])) {
                    break;
                }

                if (count === rule.get(s2[j])) {
                    streak++;
                }
                j++;
            }

            if (streak === rule.size) {
                return true;
            }

        }


        return false;
    }
}
