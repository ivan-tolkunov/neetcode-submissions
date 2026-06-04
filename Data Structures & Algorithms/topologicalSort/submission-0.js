class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */

    visited = new Set();
    visiting = new Set();

    topologicalSort(n, edges) {
        const graph = new Map();
        const res = [];

        for (let [f, t] of edges) {
            const nei = (graph.get(f) ?? []);
            nei.push(t);
            graph.set(f, nei);
        }


        for (let i = 0; i < n; i++) {
            if (!this.dfs(i, graph, res)) {
                return [];
            }
        }

        return res.reverse();
    }

    dfs(node, graph, res) {
        if (this.visited.has(node)) {
            return true;
        }
        if (this.visiting.has(node)) {
            return false;
        }

        this.visiting.add(node);
        for (let nei of (graph.get(node) ?? [])) {
            if (!this.dfs(nei, graph, res)) {
                return false;
            }
        }

        this.visiting.delete(node);
        this.visited.add(node);

        res.push(node);
        return true;
    }
}
