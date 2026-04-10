class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const nums1Copy = nums1.slice(0, m);
        const size = m + n;

        let i = 0;
        let j = 0;
        let idx = 0;

        while (idx < size) {
            if (j >= n || (nums2[j] >= nums1Copy[i] && i < m)) {
                nums1[idx++] = nums1Copy[i++];
            } else {
                nums1[idx++] = nums2[j++];
            }
        }
    }
}
