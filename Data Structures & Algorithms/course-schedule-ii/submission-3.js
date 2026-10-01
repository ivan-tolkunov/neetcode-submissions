class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const map = new Map();

        for (let i = 0; i < numCourses; i++) {
            map.set(i, []);
        }

        for (let [c, p] of prerequisites) {
            map.get(c).push(p);
        }

        const cycle = new Set();
        const visit = new Set();
        const res = [];

        for (let i = 0; i < numCourses; i++) {
            if (!this.dfs(map, i, cycle, visit, res)) {
                return [];
            }
        }


        return res;
    }

    dfs(map, crs, cycle, visit, res) {
        if (cycle.has(crs)) {
            return false;
        }
        
        if (visit.has(crs)) {
            return true;
        }


        cycle.add(crs);

        for (let c of map.get(crs)) {
            if (!this.dfs(map, c, cycle, visit, res)) {
                return false;
            }
        }

        cycle.delete(crs);
        visit.add(crs);
        map.set(crs, []);
        res.push(crs);

        return true;
    }
}
