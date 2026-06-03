class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.parents = [];
        this.size = [];
        this.n = n;

        for (let i = 0; i < n; i++) {
            this.parents.push(i);
            this.size.push(i);
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        if (x === this.parents[x]) {
            return this.parents[x];
        }

        this.parents[x] = this.find(this.parents[x]);

        return this.parents[x];
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        const par_x = this.find(x);
        const par_y = this.find(y);

        if (par_x !== par_y) {
            if (this.size[par_x] < this.size[par_y]) {
                this.parents[par_x] = par_y;
                this.size[par_y] += this.size[par_x];
            } else {
                this.parents[par_y] = par_x;
                this.size[par_x] += this.size[par_y];
            }

            this.n = this.n - 1;
            return true;
        }

        return false;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.n;
    }
}
