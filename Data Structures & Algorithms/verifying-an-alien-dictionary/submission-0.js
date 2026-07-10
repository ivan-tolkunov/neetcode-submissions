class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const orderMap = new Map();

        for (let i = 0; i < order.length; i++) {
            orderMap.set(order[i], i);
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];


            for (let j = 0; j < w1.length; j++) {
                if (j === w2.length) {
                    return false;
                }

                if (w1[j] !== w2[j]) {
                    const indexW1 = orderMap.get(w1[j]);
                    const indexW2 = orderMap.get(w2[j]);

                    if (indexW1 > indexW2) {
                        return false;
                    }

                    break;
                }
            }
        }

        return true;
    }
}
