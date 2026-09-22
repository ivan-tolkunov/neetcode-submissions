class Solution {
    /**
     * @param {number[][]} arrays
     * @return {number}
     */
    maxDistance(arrays) {
        let min = arrays[0][0];
        let max = arrays[0][arrays[0].length - 1];
        let res = 0;

        for (let i = 1; i < arrays.length; i++) {
            res = Math.max(
                res,
                Math.max(
                    Math.abs(arrays[i][arrays[i].length - 1] - min),
                    Math.abs(max - arrays[i][0])
                )
            );
            min = Math.min(min, arrays[i][0]);
            max = Math.max(max, arrays[i][arrays[i].length - 1]); 
        }

        return res;

    }
}
