class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if (sentence1.length !== sentence2.length) {
            return false;
        }

        const map = new Map();

        for (let i = 0; i < sentence1.length; i++) {
            map.set(sentence1[i], [sentence1[i]]);
            map.set(sentence2[i], [sentence2[i]]);
        }

        for (let [x, y] of similarPairs) {
            if (map.has(x)) {
                map.get(x).push(y);
            }
            if (map.has(y)) {
                map.get(y).push(x);
            }
        }

        for (let i = 0; i < sentence1.length; i++) {
            if (sentence1[i] === sentence2[i]) {
                continue;
            }

            const similar1 = map.get(sentence1[i]);
            const similar2 = map.get(sentence2[i]);

            if (!similar1.includes(sentence2[i]) && !similar2.includes(sentence1[i])) {
                return false;
            }
        }


        return true;
    }
}
