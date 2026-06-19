class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            const cap = Math.min(heights[left], heights[right]);

            max = Math.max(max, cap * (right - left));

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return max;

    }
}
