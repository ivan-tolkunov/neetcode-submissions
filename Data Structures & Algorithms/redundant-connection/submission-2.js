class Union {
    constructor(n) {
        this.parents = [];
        this.size = [];

        for (let i = 0; i < n; i++) {
            this.parents.push(i);
            this.size.push(1);
        }
    }

    find(x) {
        if (x === this.parents[x]) {
            return this.parents[x];
        }

        this.parents[x] = this.find(this.parents[x]);

        return this.parents[x];
    }

    union(x, y) {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) {
            return false;
        }

        if (this.size[p1] > this.size[p2]) {
            this.parents[p2] = p1;
            this.size[p1] = this.size[p2];
        } else {
            this.parents[p1] = p2;
            this.size[p2] = this.size[p1];
        }

        return true;
    }
}
class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const uf = new Union(edges.length);

        for (let [p1, p2] of edges) {
            if (!uf.union(p1, p2)) {
                return [p1, p2];
            }
        }

        return [];
    }
}
