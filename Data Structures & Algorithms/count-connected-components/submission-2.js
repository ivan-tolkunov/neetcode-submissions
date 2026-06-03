class Union {
    constructor(n) {
        this.parents = [];
        this.size = [];
        this.n = n;

        for (let i = 0; i < n; i++) {
            this.parents.push(i);
            this.size.push(i);
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
            return true;
        }

        if (this.size[p1] > this.size[p2]) {
            this.parents[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parents[p1] = p2;
            this.size[p2] += this.size[p1];
        }

        this.n = this.n - 1;
        return true;
    }

    getGraphs() {
        return this.n;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const uf = new Union(n);

        for (let [f, t] of edges) {
            uf.union(f, t);
        }

        return uf.getGraphs();
    }
}