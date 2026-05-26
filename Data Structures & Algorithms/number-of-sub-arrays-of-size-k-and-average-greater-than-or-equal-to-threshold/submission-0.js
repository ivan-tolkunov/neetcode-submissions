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
        const res = [];
        let count = 0;

        for (let right = 0; right < arr.length; right++) {
            sum += arr[right];
            res.push(arr[right]);
            if ((sum / k) >= threshold && res.length === k) {
                count++;
            }

            if (res.length === k) {
                const el = res.shift();
                sum -= el;
                left++;
            }
        }

        return count;
    }
}
