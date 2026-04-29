class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();
        const visited = new Set();

        for (let [c, p] of prerequisites) {
            if (!map.has(c)) {
                map.set(c, new Set());
            }
            const course = map.get(c);
            course.add(p);
            map.set(c, course);
        }
        
        for (let i = 0; i < numCourses; i++) 
            this.dfs(map, i, visited);

        for (let i = 0; i < numCourses; i++) {
            const el = map.get(i) ?? new Set();

            if (el.size > 0) {
                return false;
            }
        }

        return true;
    }

    dfs(map, course, visited) {
        const reqs = map.get(course) ?? new Set();

        if (reqs.size === 0) {
            return true;
        }

        if (visited.has(course)) {
            return false;
        }

        visited.add(course);

        for (let req of reqs) {
            if (!this.dfs(map, req, visited)) {
                return false;
            }
        }

        visited.delete(course);
        map.set(course, new Set());


        return true;
    }
}
