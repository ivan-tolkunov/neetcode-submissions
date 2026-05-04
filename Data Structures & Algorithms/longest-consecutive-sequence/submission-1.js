class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        let max = 0;

        for (let num of nums) {
            set.add(num);
        }

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let current = 1;
                let k = 1;
                while (set.has(num + k)) {
                current++;
                k++; 
                }

                max = Math.max(max, current);
            }
        }

        return max;
    }
}
