class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        const order = new Map();

        for (let i = 0; i < keyboard.length; i++) {
            order.set(keyboard[i], i);
        }

        let res = 0;
        let index = 0;

        for (let ch of word) {
            res += Math.abs(index - order.get(ch));
            index = order.get(ch);    
        }

        return res;
    }
}
