class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        const res = this.rec(x, Math.abs(n));

        return n < 0 ? 1 / res : res;
    }

    rec (x, n) {
        if (n === 0) {
            return 1;
        }

        if (x === 0) {
            return 0;
        }

        const res = this.rec(x * x, Math.floor(n / 2));

        return n % 2 === 0 ? res : x * res;
    }
}
