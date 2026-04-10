class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const buckets = [0, 0, 0];

        for (let num of nums) {
            buckets[num] +=  1;
        }

        let idx = 0;

        for(let i = 0; i < buckets.length; i++) {
            while (buckets[i] > 0) {
                nums[idx++] = i;
                buckets[i] -= 1
            }
        }
    }
}
