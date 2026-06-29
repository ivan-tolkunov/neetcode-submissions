class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
       const memo = new Map();

        return this.dfs(0, profit, weight, capacity, memo);

    }

    dfs(i, profit, weight, capacity, memo) {
        if (i >= profit.length) {
            return 0;
        }

        const key = `${i},${capacity}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let max = this.dfs(i + 1, profit, weight, capacity, memo);

        capacity -= weight[i];

        if (capacity >= 0) {
            const p = profit[i] + this.dfs(i + 1, profit, weight, capacity, memo);
            max = Math.max(max, p);
        }

        memo.set(key, max);

        return max;
    }
}
