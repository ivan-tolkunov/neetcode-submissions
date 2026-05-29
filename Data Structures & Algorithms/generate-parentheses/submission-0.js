class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    res = [];
    generateParenthesis(n) {
        this.n = n;

        this.backtrack("", 0, 0);

        return this.res;
    }

    backtrack(curS, openB, closeB) {
        if (openB < closeB) {
            return;
        }
        if (openB > this.n) {
            return
        }

        if (curS.length === 2 * this.n) {
            this.res.push(curS);
            return;
        }

        this.backtrack(curS + '(', openB + 1, closeB);
        this.backtrack(curS + ')', openB, closeB + 1);
    }
}
