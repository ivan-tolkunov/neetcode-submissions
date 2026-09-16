class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        for (let i = 0; i < s.length - 1; i++) {
            let result = s.slice(0, i) + s.slice(i + 1);

            if (result === result.split('').reverse().join('')) {
                return true;
            }
        }

        let result = s.slice(0, s.length - 1);

        return result === result.split('').reverse().join('');
    }
}
