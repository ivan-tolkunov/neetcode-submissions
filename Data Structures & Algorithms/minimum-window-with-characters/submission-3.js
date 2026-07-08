class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const rule = Array(128).fill(0);
        let count = 0;

        for (let ch of t) {
            let index = this.#getIndex(ch);

            if (rule[index] === 0) {
                count++;
            }

            rule[index] = rule[index] + 1;
        }

        let left = 0;
        let res = "";
        let len = Infinity;
        let window = 0;
        const windowRule = Array(128).fill(0);

        for (let right = 0; right < s.length; right++) {
            let index = this.#getIndex(s[right]);

            windowRule[index]++;

            if (windowRule[index] === rule[index]) {
                window++;
            }

           while (window === count) {
                if (len > right - left + 1) {
                    len = right - left + 1;
                    res = s.slice(left, right + 1);
                }

                index = this.#getIndex(s[left]);

                windowRule[index]--;

                if (windowRule[index] < rule[index]) {
                    window--;
                }

                left++;
           } 
        }

        return res;
    }

    #getIndex(ch) {
        return ch.charCodeAt(0) - 'A'.charCodeAt(0);
    }
}
