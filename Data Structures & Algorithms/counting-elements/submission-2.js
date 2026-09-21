class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        const map = new Set();

        for (let num of arr) {
            map.add(num);
        }

        let res = 0;

        for (let num of arr) {
            const search = num + 1;
            res += map.has(search) ? 1 : 0;
        }

        return res;
    }
}
