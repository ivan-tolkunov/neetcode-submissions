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
            let len = 1;
            let i = num - 1;
            let j = num + 1;

            while (set.has(i)) {
                len++;
                set.delete(i);
                i--;
            }

            while (set.has(j)) {
                len++;
                set.delete(j);
                j++;
            }

            max = Math.max(max, len);
        }

        return max;
    }
}
