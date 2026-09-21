class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        const res = [];

        for (let i = 0; i < strings.length; i++) {
            const word1 = strings[i];

            if (word1 === "") {
                continue;
            }

            const w = [word1];

            for (let j = i + 1; j < strings.length; j++) {
                const word2 = strings[j];

                if (word1.length !== word2.length || word2 === "") {
                    continue;
                }

                let distance = (this.charToIndex(word1[0]) - this.charToIndex(word2[0]));

                if (distance < 0) {
                    distance = 26 + distance;
                }

                for (let c = 0; c < word1.length; c++) {
                    const index1 = this.charToIndex(word1[c]);
                    const index2 = this.charToIndex(word2[c]);

                    let currentDistance = (index1 - index2);

                    if (currentDistance < 0) {
                        currentDistance = 26 + currentDistance;
                    }

                    if (distance !== currentDistance) {
                        break;
                    }

                    if (c === word1.length - 1) {
                        w.push(word2);
                        strings[j] = "";
                    }
                }
            }

            res.push(w);
        }


        return res;
    }

    charToIndex(ch) {
        const start = 97;
        const ascii = ch.charCodeAt(0);

        return ascii - start;
    }
}
