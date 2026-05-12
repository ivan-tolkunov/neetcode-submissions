class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        const path = [];
        for (let trip of trips) {
            const f = { point: trip[1], price: -trip[0]};
            const to = {point: trip[2], price: trip[0]};

            path.push(to);
            path.push(f);
        }

        path.sort((a, b) => a.point - b.point || b.price - a.price);

        for (let p of path) {
           capacity += p.price;

           if (capacity < 0) {
                return false;
           } 
        }

        return true;
    }
}
