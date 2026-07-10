class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const graph = Array.from({ length: n + 2 }, () => new Set());

        for (let [p, t] of trust) {
            graph[p].add(t);
            graph[t].add(t);
        }

        for (let i = 1; i <= n; i++) {
            if (graph[i].size === 1) {
                let isJudge = true;

                for (let j = 1; j <= n; j++) {
                    if (!graph[j].has(i)) {
                        isJudge = false;
                        break;
                    }
                }

                if (isJudge) {
                    return i;
                }
            }
        }

        return -1;
    }
}
