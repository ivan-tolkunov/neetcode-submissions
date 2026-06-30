class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = 0;
        let right = 0;

        for (let weight of weights) {
            right += weight;
            left = Math.max(left, weight);
        }

        let res = right;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (validate(mid)) {
                res = mid;
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        function validate(capacity) {
            let time = 1;
            let sum = 0;

            for (let weight of weights) {
                if (sum + weight > capacity) {
                    time++;
                    sum = 0;
                }

                sum += weight;

                if (time > days) {
                    return false;
                }
            }

            return true;
        }

        return res;
    }
}
