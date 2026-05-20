class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();

        for (const [a, b] of edges) {
            if (!graph.has(a)) graph.set(a, []);
            if (!graph.has(b)) graph.set(b, []);
                graph.get(a).push(b);
                graph.get(b).push(a);
        }

        let count = 0;
        const visited = new Set();

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;

            count++;
            const queue = [i];
            visited.add(i);

            while (queue.length) {
                const node = queue.shift();

                for (const nei of graph.get(node) ?? []) {
                    if (!visited.has(nei)) {
                        visited.add(nei);
                        queue.push(nei);
                    }
                }
            }
        }

        return count;
    }
}