class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        for (let i = 0; i < nums2.length; i++) {
            const index = this.binarySearch(nums1, nums2[i]);
            const leftPart = nums1.slice(0, index + 1);
            const rightPart = nums1.slice(index + 1, nums1.length);
            leftPart.push(nums2[i]);
            nums1 = [... leftPart, ...rightPart];
        }

        const mid = Math.floor(nums1.length / 2);

        if (nums1.length % 2 !== 0) {
            return nums1[mid];
        } else {
            return (nums1[mid] + nums1[mid - 1]) / 2;
        }
    }

    binarySearch(arr, value) {
        let left = 0;
        let right = arr.length - 1;
        let index = -1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] > value) {
                right = mid - 1;
            } else if (arr[mid] < value) {
                index = mid;
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return index;
    }
}
