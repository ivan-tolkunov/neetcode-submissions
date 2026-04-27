class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const res = [];
        const pq = new PriorityQueue(([x1, y1], [x2, y2]) => this.calcDistance(x1, y1) - this.calcDistance(x2, y2), points);

        while(k > 0) {
            const el = pq.dequeue();
            res.push(el);
            k--;
        }
        


        return res;
    }

    calcDistance(x , y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
}
