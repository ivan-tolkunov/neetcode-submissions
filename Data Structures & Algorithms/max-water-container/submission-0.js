class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const top = Math.min(heights[left], heights[right]);

            const cur = (right - left) * top;

            max = Math.max(max, cur);

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return max;
    }
}
