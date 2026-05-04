class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        let left = 0;
        let right = 1;

        while (right < prices.length) {
            const sum = prices[right] - prices[left];

            if (prices[left] > prices[right]) {
                left = right;
            }

            res = Math.max(sum, res);
            right++;
        }


        return res;
    }
}
