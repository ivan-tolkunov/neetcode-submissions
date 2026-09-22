class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     */
    findLonelyPixel(picture) {
        const rows = picture.length;
        const cols = picture[0].length;

        const state = Array.from(
            { length: rows + 1 },
            () => Array(cols + 1).fill(0)
        );

        for (let i = 0; i < rows; i++) {
            let count = 0;

            for (let col = 0; col < cols; col++) {
                if (picture[i][col] === "B") {
                    count++;
                } 
            }

            state[i + 1][0] = count;
            count = 0;

            
        }

        for (let i = 0; i < cols; i++) {
            let count = 0;

            for (let row = 0; row < rows; row++) {
                if (picture[row][i] === "B") {
                    count++;
                }
            }

            state[0][i + 1] = count;
            count = 0;
        }

        let res = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (
                    picture[row][col] === "B" &&
                    state[row + 1][0] === 1 &&
                    state[0][col + 1] === 1
                ) {
                    res++;
                }
            }
        }
        return res;
    }
}
