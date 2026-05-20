class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

            const res = [];

            for (const interval of intervals) {
                const last = res[res.length - 1];

                if (!last || interval[0] > last[1]) {
                    res.push(interval);
                } else {
                    last[1] = Math.max(last[1], interval[1]);
                }
            }

            return res;
    }
}
