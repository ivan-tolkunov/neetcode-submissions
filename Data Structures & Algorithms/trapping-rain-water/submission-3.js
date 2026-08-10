class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxL = Array(height.length).fill(0);
        const maxR = Array(height.length).fill(0);

        let left = 1;
        let right = height.length - 2;

        while(left < height.length) {
            maxL[left] = Math.max(maxL[left - 1], height[left - 1])
            maxR[right] = Math.max(maxR[right + 1], height[right + 1]);
            left++;
            right--;
        }

        let res = 0;

        for (let i = 0; i < height.length; i++) {
            res += Math.max(0, Math.min(maxL[i], maxR[i]) - height[i]);
        }

        return res;
    }
}
