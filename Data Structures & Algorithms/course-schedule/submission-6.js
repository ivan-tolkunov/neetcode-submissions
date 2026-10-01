class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();

        for (let i = 0; i < numCourses; i++) {
            graph.set(i, new Set());
        }

        for (let [c, p] of prerequisites) {
            graph.get(c).add(p);
        }

        for (let i = 0; i < numCourses; i++) {
            this.dfs(graph, i, new Set());
        }

        for (let i = 0; i < numCourses; i++) {
            if (graph.get(i).size > 0) {
                return false;
            }
        }

        return true;
    }

    dfs(graph, course, visited) {
        if (graph.get(course).size === 0) {
            return true;
        }

        if (visited.has(course)) {
            return false;
        }

        visited.add(course);

        for (let c of graph.get(course)) {
            if (this.dfs(graph, c, visited)) {
                graph.get(course).delete(c);
            }
        }

        return graph.get(course).size === 0;
    }
}
