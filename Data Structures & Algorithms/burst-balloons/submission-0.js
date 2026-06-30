class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    cache = new Map();

    maxCoins(nums) {
        nums.unshift(1);
        nums.push(1);

        return this.rec(nums);
    }

    rec (nums) {
        let key = String(nums);

        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        if(nums.length === 2) {
            return 0;
        }


        let max = 0;

        for (let i = 1; i < nums.length - 1; i++) {
            let coins = nums[i - 1] * nums[i] * nums[i + 1];
            const newArr = nums.slice(0, i).concat(nums.slice(i + 1));
            coins += this.rec(newArr);
            max = Math.max(max, coins);
        }

        this.cache.set(key, max);
        return max;
    }
}
