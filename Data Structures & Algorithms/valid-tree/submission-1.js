class Union {
    constructor(n) {
        this.parents = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
        this.count = n;
    }

    find(node) {
        if (this.parents[node] !== node) {
            this.parents[node] = this.find(this.parents[node]);
        }

        return this.parents[node];
    }

    union(u, v) {
        const uNode = this.find(u);
        const vNode = this.find(v);

        if (uNode === vNode) {
            return false;
        }

        if(this.size[uNode] > this.size[vNode]) {
            this.parents[vNode] = uNode;
            this.size[uNode] += this.size[vNode];
        } else {
            this.parents[uNode] = vNode;
            this.size[vNode] += this.size[uNode];
        }

        this.count--;
        return true;
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const union = new Union(n);

        for (let [f, t] of edges) {
            if (!union.union(f, t)) {
                return false;
            }
        }

        return union.count === 1;
    }
}
