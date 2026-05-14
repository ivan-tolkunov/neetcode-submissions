/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = [];
        const end = [];

        for (let i of intervals) {
            start.push(i.start);
            end.push(i.end);
        }

        start.sort((a, b) => Number(a) - Number(b));
        end.sort((a, b) => Number(a) - Number(b));

        let count = 0;
        let max = 0;

        let i = 0;
        let j = 0;

        while (i < intervals.length && j < intervals.length) {
            if (start[i] >= end[j]) {
                count--;
                j++;
            } else {
                count++;
                i++;
            }

            max = Math.max(max, count);
        }

        return max;
    }
}
