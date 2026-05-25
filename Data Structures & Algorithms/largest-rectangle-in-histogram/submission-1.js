class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        const len = heights.length;
        let max = 0;

        for (let i = 0; i < len; i++) {
            if (stack.length === 0 || heights[i] >= stack[stack.length - 1]) {
                stack.push([i, heights[i]]);
            } else {
                let el = stack[stack.length - 1];
                let index = Infinity;

                while (el && el[1] > heights[i]) {
                    el = stack.pop();
                    max = Math.max(max, (i - el[0]) * el[1]);
                    index = Math.min(index, el[0]);
                    el = stack[stack.length - 1];
                }

                stack.push([Math.min(index, i), heights[i]]);
            }
        }

        for (let el of stack) {
            max = Math.max(max, (len - el[0]) * el[1]);
        }

        return max;
    }
}
