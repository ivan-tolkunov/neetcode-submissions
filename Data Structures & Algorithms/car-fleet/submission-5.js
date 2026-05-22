class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sum = [];

        for (let i = 0; i < position.length; i++) {
            sum.push({
                p: position[i],
                s: speed[i],
            })
        }

        const res = sum.sort((a, b) => Number(a.p) - Number(b.p)).map((a) => ((target - a.p) / a.s));

        let count = 0;
        let max = 0;

        for (let i = res.length - 1; i >= 0; i--) {
            if (res[i] > max) {
                count++;
            }
            
            max = Math.max(max, res[i]);
        }

        return count;
    }
}
