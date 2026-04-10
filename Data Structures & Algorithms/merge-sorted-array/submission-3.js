class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let last = m + n - 1;

        let idxNums1 = m - 1;
        let idxNums2 = n - 1;

        while (last >= 0) {
            if (idxNums2 < 0 || nums1[idxNums1] >= nums2[idxNums2]) {
                nums1[last--] = nums1[idxNums1--];
            } else {
                nums1[last--] = nums2[idxNums2--];
            }
        }
    }
}
