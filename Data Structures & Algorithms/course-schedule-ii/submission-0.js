class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const map = new Map();

        for (let [c, p] of prerequisites) {
            const pre = map.get(c) ?? [];
            pre.push(p);
            map.set(c, pre);
        }

        const visited = new Set();
        const cycle = new Set();
        const res = [];

        for (let i = 0; i < numCourses; i++) {
            if(!this.dfs(visited, cycle, i, map, res)) {
                return [];
            }
        }

        return res;
    }

    dfs(visited, cycle, course, map, res) {
        if (cycle.has(course)) {
            return false;
        }

        if (visited.has(course)) {
            return true;
        }

        const pre = map.get(course) ?? [];
        cycle.add(course);

        for (let p of pre) {
            const isValid = this.dfs(visited, cycle, p, map, res);

            if (!isValid) {
                return false;
            }
        }

        visited.add(course);
        cycle.delete(course);
        res.push(course);

        return true;
    }
}
