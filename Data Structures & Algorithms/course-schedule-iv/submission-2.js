class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const graph = new Map();

        for (let [c, p] of prerequisites) {
            const nei = (graph.get(c) ?? []);
            nei.push(p);
            graph.set(c, nei);
        }

        const pre = new Map();

        function dfs(node) {
            if (pre.has(node)) {
                return pre.get(node);
            }
            
            const all = new Set();
            for (let nei of (graph.get(node) ?? [])) {

                const p = dfs(nei);

                for (let x of p) {
                    all.add(x);
                }

                all.add(nei);
            }

            pre.set(node, all);
            return all; 
        }

        for (let i = 0; i < numCourses; i++) {
            dfs(i);
        }

        const res = [];

        for (let [c, p] of queries) {
            res.push(pre.get(c).has(p));
        }


        return res;
    }
}
