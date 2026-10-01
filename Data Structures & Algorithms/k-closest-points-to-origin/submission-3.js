class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (let [x, y] of points) {
            const distance = this.getDistance(x, y);

            minHeap.enqueue([distance, x, y]);

            if (minHeap.size() > k) {
                minHeap.dequeue();
            }
        }

        const res = [];

        for (let val of minHeap) {
            res.push([val[1], val[2]]);
        }

        return res;
    }

    getDistance(x, y) {
       return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
}
