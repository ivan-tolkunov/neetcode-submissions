class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let max = 0;

        for (let r = 0; r < prices.length; r++) {
            let profit = prices[r] - prices[l];
            max = Math.max(profit, max);
            
            while (profit < 0) {
                l++;
                profit = prices[r] - prices[l];
            }
        }

        return max;
    }
}
