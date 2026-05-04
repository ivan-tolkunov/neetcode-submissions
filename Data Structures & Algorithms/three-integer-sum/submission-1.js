class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = sorted.length - 1;

            while (left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];

                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    res.push([sorted[i], sorted[left], sorted[right]]);

                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }

            }
        }

        return res;
    }
}
