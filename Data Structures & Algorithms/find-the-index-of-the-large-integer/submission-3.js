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
        let l = 0;
        let r = reader.length() - 1;

        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);

            let res = 0;

            if ((l + r) % 2 === 0) {
                res = reader.compareSub(l, mid, mid, r);
            } else {
                res = reader.compareSub(l, mid, mid + 1, r);
            }

            if (res === 1) {
                r = mid;
            } else if (res === -1) {
                l = mid + 1;
            } else {
                if (r - mid > mid - l + 1) {
                    r = mid;
                } else {
                    l = mid;
                }
            }
        }

        console.log(l);

        return l;
    }
}
