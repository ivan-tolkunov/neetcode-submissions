class Union {
    constructor(n) {
        this.parents = Array(n);
        this.size = Array(n).fill(1);

        for (let i = 1; i <= n; i++) {
            this.parents[i] = i;
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
        const findX = this.find(x);
        const findY = this.find(y);

        if (findX === findY) {
            return false;
        }

        if (this.size[findX] > this.size[findY]) {
            this.parents[findY] = this.parents[findX];
            this.size[findX] += this.size[findY];
        } else {
            this.parents[findX] = this.parents[findY];
            this.size[findY] += this.size[findX];
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
        const union = new Union(edges.length);
            
        for (let [f, t] of edges) {
            if (!union.union(f, t)) {
                return [f, t];
            }
        }

        return [];
    }
}
