class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const map = new Map();

        for (let c of s1) {
            let count = 0;
            if (map.has(c)) {
                count = map.get(c);
            }

            count++;
            map.set(c, count);
        }

        let copy = new Map(map);

        for (let i = 0; i < s2.length; i++) {
            if (!copy.has(s2[i])) {
                continue;
            }

            let j = i;

            while (copy.has(s2[j]) && j < s2.length) {
                const value = copy.get(s2[j]) - 1;

                if (value < 0) {
                    break;
                }

                copy.set(s2[j], value);

                j++;
            }

            let flag = 0;

            for (let [key, val] of copy) {
                if (val !== 0) {
                    flag = 1;
                    break;
                }
            }

            if (flag === 0) {
                return true;
            }

            copy = new Map(map);
        }

        return false;
    }
}
