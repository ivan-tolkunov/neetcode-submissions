class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n === 0) {
            return 1;
        }

        if (x === 0) {
            return 0;
        }

        function rec (res) {
            if (n === 0) {
                return res;
            }

            n = n - 1;

            return rec(res * x);
        }

        if (n < 0) {
            x = 1 /x;
            n = -n;
        }

        n--;
        return rec(x);
    }
}
