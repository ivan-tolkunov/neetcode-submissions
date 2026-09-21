class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        n = n.toString();
        let nRev = n.split('').reverse();

        for (let i = 0; i < nRev.length; i++) {
            const num = nRev[i];
            if (num === '6') {
                nRev[i] = "9";
            } else if (num === "9") {
                nRev[i] = "6";
            }

            if (num === '2' || num === "3" || num === "4" || num === "5" || num === "7") {
                return false;
            }
        }

        for (let i = 0; i < nRev.length; i++) {
            if (nRev[i] !== n[i]) {
                return true;
            }
        }

        return false;
    }
}
