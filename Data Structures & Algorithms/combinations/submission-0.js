class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        function comb(i ,arr) {
            if (arr.length === k) {
                res.push([...arr]);
                return;
            }

            if (i > n) {
                return;
            }

            arr.push(i);
            comb(i + 1, arr);
            arr.pop();
            comb(i + 1, arr)
        }

        comb(1, []);

        return res;
    }
}
