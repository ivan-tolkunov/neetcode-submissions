class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        const normalization = [];
        for (let trip of trips) {
            normalization.push({
                point: trip[1],
                cost: -trip[0]
            });
            normalization.push({
                point: trip[2],
                cost: trip[0]
            });
        }

        normalization.sort((a, b) => {
            if (Number(a.point) - Number(b.point) === 0) {
                return Number(b.cost) - Number(a.cost);
            }

            return Number(a.point) - Number(b.point);
        });

        for (let info of normalization) {
            capacity += info.cost;

            if (capacity < 0) {
                return false;
            }
        }

        return true;
    }
}
