class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        const map = new Map();

        for (let i = 0; i < nums2.length; i++) {
            map.set(nums2[i], i);
        }

        for (let i = 0; i < nums1.length; i++) {
            const index = map.get(nums1[i]);
            nums1[i] = index; 
        }

        return nums1;
    }
}
