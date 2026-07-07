class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        for (let num of nums) {
            set.add(num);
        }

        let max = 0;

        for (let num of nums) {
            let p = 1;
            let len = 1;

            while (set.has(num + p)) {
                set.delete(num + p);
                len++;
                p++;
            }

            p = 1;

            while (set.has(num - p)) {
                set.delete(num - p);
                len++;
                p++;
            }

            max = Math.max(max, len);
        }

        return max;
    }
}
