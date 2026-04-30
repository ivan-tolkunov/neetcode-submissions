class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const binary = [];
        for (let i = 0; i <= n; i++) {
            let num = i;
            let count = 0;
            while (num > 0) {
                if ((num & 1) === 1) {
                    count++;
                }

                num = num >> 1;
            }

            binary.push(count);
        } 
        return binary;
    }
}
