class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */

    visited = new Set();

    topologicalSort(n, edges) {
        const graph = new Map();
        const res = [];

        for (let [f, t] of edges) {
            const nei = (graph.get(t) ?? []);
            nei.push(f);
            graph.set(t, nei);
        }


        for (let i = 0; i < n; i++) {
            const visiting = new Set();
            if (!this.dfs(i, graph, res, visiting)) {
                return [];
            }
        }

        return res;
    }

    dfs(node, graph, res, visiting) {
        if (visiting.has(node)) {
            return false;
        }
        
        if (this.visited.has(node)) {
            return true;
        }

        visiting.add(node);
        for (let nei of (graph.get(node) ?? [])) {
            if (!this.dfs(nei, graph, res, visiting)) {
                return false;
            }
        }

        this.visited.add(node);

        res.push(node);
        return true;
    }
}
