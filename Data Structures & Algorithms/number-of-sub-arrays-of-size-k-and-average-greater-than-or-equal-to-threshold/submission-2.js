class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let left = 0;
        let sum = 0;
        let count = 0;

        for (let right = 0; right < arr.length; right++) {
            const size = right - left;
            sum += arr[right];

            if (size + 1 === k) {
                if (sum / k >=  threshold) {
                    count++;
                }

                sum -= arr[left];
                left++;
            }

        }

        return count;
    }
}
