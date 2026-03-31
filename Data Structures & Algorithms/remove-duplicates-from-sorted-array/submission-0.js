class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let  count = 0;
        let k = 0;

        while (k < nums.length) {
            let element = nums[k];
            let j = k + 1;

            while (j < nums.length && nums[j] === element) {
                j++;
            }
            
            k++;
            count++;
            nums[k] = nums[j];

            if (!nums[j]) {
                return count;
            }
        }

        return count;
    }
}
