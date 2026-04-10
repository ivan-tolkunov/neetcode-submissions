class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const nums3 = nums1.slice(0, m);
        let i = 0;
        let j = 0;
        let c = 0;

        while (i < n && j < m) {
            if  (nums2[i] > nums3[j]) {
                nums1[c] = nums3[j];
                j++;
            } else {
                nums1[c] = nums2[i];
                i++;
            }
            c++;
        }

        while(i < n) {
            nums1[c] = nums2[i];
            i++;
            c++;
        } 

        while(j < m) {
            nums1[c] = nums3[j];
            j++;
            c++;
        } 
    }
}
