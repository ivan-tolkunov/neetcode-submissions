class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let j = 0;
        for (let i = nums1.length - 1; i >= m; i--) {
            nums1[i] = nums2[j];
            j++;
            if (j === n) {
                break;
            }
        }

        j = nums1.length - 1;

        for (let c = 0; c < n; c++) {
            for (let i = 0; i < nums1.length - c; i++) {
                if (nums1[i] > nums1[j]) {
                    let tmp = nums1[i];
                    nums1[i] = nums1[j];
                    nums1[j] = tmp;
                }
            }
            j--;
        }
    }
}
