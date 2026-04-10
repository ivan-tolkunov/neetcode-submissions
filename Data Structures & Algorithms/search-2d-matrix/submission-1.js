class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;

        const rows = matrix.length;
        const cols = matrix[0].length;

        let right = rows * cols;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            const col = mid % cols;
            const row = Math.floor(mid / cols) % rows;

            const el = matrix[row][col];

            if (el > target) {
                right = --mid;   
            } else if (el < target) {
                left = ++mid;
            } else {
                return true;
            }
        }

        return false;
    }
}
