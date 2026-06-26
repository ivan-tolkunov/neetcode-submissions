class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let cache = new Map();

        function rec(cur) {
            const key = cur;

            if (cache.has(key)) {
                return cache.get(key);
            }

            if (cur === amount) {
                return 0;
            }

            if (cur > amount) {
                return Infinity;
            }

            let res = Infinity;

            for (let j = 0; j < coins.length; j++) {
                res = Math.min(res, 1 + rec(cur + coins[j]));
            }

            cache.set(key, res);

            return res;
        }


        const res = rec(0);

        return res === Infinity ? -1 : res;
    }
}
