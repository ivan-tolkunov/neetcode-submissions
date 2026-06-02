class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const visited = new Set();
        const graph = new Map();

        for (let edge of edges) {
            let nodes = graph.get(edge[0]) ?? [];
            nodes.push(edge[1]);
            graph.set(edge[0], nodes);

            nodes = graph.get(edge[1]) ?? [];
            nodes.push(edge[0]);
            graph.set(edge[1], nodes);
        }

        function dfs(prev, node) {
            if (visited.has(node)) {
                return false;
            }

            visited.add(node);

            for (let nei of graph.get(node) ?? []) {
                if (nei === prev) {
                    continue;
                }

                if (!dfs(node, nei)) {
                    return false;
                }
            }

            return true;
        }

        return dfs(-1, 0) && visited.size === n;
    }
}