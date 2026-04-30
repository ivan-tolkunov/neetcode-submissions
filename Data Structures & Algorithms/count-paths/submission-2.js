class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const array = Array(m).fill(Array(n).fill(1));

        for (let r = m - 2; r >= 0; r--) {
            for (let c = n - 2; c >= 0; c--) {
                array[r][c] = array[r + 1][c] + array[r][c + 1];
            }
        }

        return array[0][0];
    }
}
