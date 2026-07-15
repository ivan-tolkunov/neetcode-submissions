class ZigzagIterator {
    /**
     * @param {Integer[]} v1
     * @param {Integer[]} v2
     */
    constructor(v1, v2) {
        this.zig = [];
        this.index = 0;

        for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
            if (i < v1.length) {
                this.zig.push(v1[i]);
            }
            if (i < v2.length) {
                this.zig.push(v2[i]);
            }
        }
    }

    _getIndex() {
        return this.index;
    }

    _getLen() {
        return this.zig.length;
    }

    _setIndex(i) {
        this.index = i;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this._getIndex() < this._getLen();
    }

    /**
     * @return {integer}
     */
    next() {
        const res = this.zig[this._getIndex()];
        this._setIndex(this._getIndex() + 1);

        return res;
    }
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
