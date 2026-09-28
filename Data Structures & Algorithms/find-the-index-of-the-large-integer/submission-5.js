/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

class Solution {
    /**
     * @param {ArrayReader} reader
     * @return {number}
     */
    getIndex(reader) {
        let left = 0;
        let len = reader.length();

        while (len > 1) {
            len = Math.floor(len / 2);
            const res = reader.compareSub(left, left + len - 1, left + len, left + len + len - 1);

            if (res === 0) {
                return left + len + len;
            }

            if (res < 0) {
                left += len;
            }
        }

        return left;
    }
}
