class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const t = Array(n + 2).fill(0);
        const trusted = Array(n + 2).fill(0);

        for (let [p, tr] of trust) {
            t[p]++;
            trusted[tr]++;
        }

        for (let i = 1; i <= n; i++) {
            if (t[i] === 0 && trusted[i] === n - 1) {
                return i;
            }
        }

        return -1;
    }
}
