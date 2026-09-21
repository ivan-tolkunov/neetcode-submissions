class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        const map = new Map();
        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, false);
            } else {
                map.set(num, true);
            }
        }

        let res = -1;

        for (let num of nums) {
            if (res < num && map.get(num)) {
                res = num;
            }
        }

        return res;
    }
}
