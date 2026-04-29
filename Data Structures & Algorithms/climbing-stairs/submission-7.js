class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    climbStairs(n) {
        if (n <= 2) {
            return n;
        }

        const base = [1,  2];

        while (n > 2) {
            const tmp = base[1];
            base[1] = tmp + base[0];
            base[0] = tmp;
            n--;
        }

        return base[1];
    }
}
