class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const numMap = new Map();
       for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        const sub = target - el;

        if (numMap.has(sub)) {
            return [numMap.get(sub), i];
        }
        numMap.set(el, i);
       }

       return []
    }
}
