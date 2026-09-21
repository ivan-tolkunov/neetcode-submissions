class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let index = nums1.length - 1;
        let pointer1 = m - 1;
        let pointer2 = nums2.length - 1;

        while (index >= 0) {
                console.log(nums2[pointer2]);
            if (pointer2 >= 0 && (nums1[pointer1] ?? -Infinity) < nums2[pointer2]) {
                nums1[index] = nums2[pointer2];
                pointer2--;
            } else {
               nums1[index] = nums1[pointer1];
               pointer1--; 
            }
            index--;
        }
    }
}
