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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let end = 0;

        for (let interval of intervals) {
            if (interval.start >= end) {
                end = interval.end;
            } else {
                return false;
            }
        }

        return true;
    }
}
