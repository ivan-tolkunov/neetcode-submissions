class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.parent = [...Array(n).keys()];
        this.size = Array(n).fill(1);
        this.numComponents = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        while (x !== this.parent[x]) {
            x = this.parent[x];
        }

        return x;
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
        let root_x = this.find(x);
        let root_y = this.find(y);
        if (root_x !== root_y) {
            if (this.size[root_x] < this.size[root_y]) {
                this.parent[root_x] = root_y;
                this.size[root_y] += this.size[root_x];
            } else {
                this.parent[root_y] = root_x;
                this.size[root_x] += this.size[root_y];
            }
            this.numComponents--;
            return true;
        }
        return false;
    }
    /**
     * @return {number}
     */
    getNumComponents() {
        return this.numComponents;
    }
}
