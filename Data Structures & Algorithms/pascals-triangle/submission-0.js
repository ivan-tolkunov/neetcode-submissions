class Triangle {
    constructor(n) {
        this.triangle = Array.from({length: n}, () => []);

        for (let i = 0; i < n; i++) {
            let j = 0;

            while (j <= i) {
                this.triangle[i].push(1);
                j++;
            }
        }
    }
}
class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const t = new Triangle(numRows);

        for (let i = 0; i < t.triangle.length; i++) {
            for (let j = 1; j < t.triangle[i].length - 1; j++) {
                t.triangle[i][j] = t.triangle[i - 1][j - 1] + t.triangle[i - 1][j];
            }
        }

        return t.triangle;    
    }
}
