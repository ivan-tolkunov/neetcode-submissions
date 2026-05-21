class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map();
        const cap = Math.floor(nums.length / 3);
        const res = [];

        for (let num of nums) {
            const amount =  map.get(num) ?? 0;

            map.set(num, amount + 1);

            if (map.size > 2) {
                for (const [key, value] of map) {
                    const newVal = value - 1;

                    if (newVal <= 0) {
                        map.delete(key);
                    } else {
                        map.set(key, newVal);
                    }
                }
            }
        }

        console.log(map);

        for (const [key, value] of map) {
            let count = 0;
            for (let num of nums) {
                if (num === key) {
                    count++;
                }
            }

            if (count > cap) {
                res.push(key);
            }
        }

        return res;
    }
}
