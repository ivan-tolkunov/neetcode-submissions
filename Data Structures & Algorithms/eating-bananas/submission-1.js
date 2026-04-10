class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let res = right;

        while (left <= right) {
            let speed = left + Math.floor((right - left)/ 2);

            let time = 0;
            
            for (let pile of piles) {
                time += Math.ceil(pile / speed);
            }

            if (time <= h) {
                res = speed;
                right = speed - 1;
            } else {
                left = speed + 1;
            }

        }

        return res;
    }
}