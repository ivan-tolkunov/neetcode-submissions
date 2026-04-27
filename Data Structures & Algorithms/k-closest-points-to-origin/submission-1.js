class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new PriorityQueue(([x1, y1], [x2, y2]) => this.calcDistance(x2, y2) - this.calcDistance(x1, y1));

        for (let point of points) {
            pq.enqueue(point);

            while (pq.size() > k) {
                pq.dequeue();
            }
        }


        return pq.toArray();
    }

    calcDistance(x , y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
}
