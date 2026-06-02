class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const graph = new Map();

        function hasPath(src, target, visited) {
            if (src === target) {
                return true;
            }

            visited.add(src);

            for (let nei of graph.get(src) ?? []) {
                if (visited.has(nei)) {
                    continue;
                }

                if (hasPath(nei, target, visited)) {
                    return true;
                }
            }

            return false;
        }

        for (let [n1, n2] of edges) {
            if (
                graph.has(n1) &&
                graph.has(n2) &&
                hasPath(n1, n2, new Set())
            ) {
                return [n1, n2];
            }

            let nei = graph.get(n1) ?? [];
            nei.push(n2);
            graph.set(n1, nei);

            nei = graph.get(n2) ?? [];
            nei.push(n1);
            graph.set(n2, nei);
        }

        return [];
    }
}