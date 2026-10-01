class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const map = new Map();

        map.set(beginWord, []);

        for (let word of wordList) {
            map.set(word, []);
        }

        for (let i = 0; i < wordList.length; i++) {
            const word1 = wordList[i];
            for (let j = i + 1; j < wordList.length; j++) {
                const word2 = wordList[j];

                if (this.isValid(word1, word2)) {
                    map.get(word1).push(word2);
                    map.get(word2).push(word1);
                }
            }
        }

        if (!map.has(endWord) || map.get(endWord).length === 0) {
            return 0;
        }

        for(let word of wordList) {
            if (this.isValid(beginWord, word)) {
                map.get(beginWord).push(word);
                map.get(word).push(beginWord);
            }
        }

        if (map.get(beginWord).length === 0) {
            return 0;
        }

        const checked = new Set();
        const q = [...map.get(endWord)];

        let step = 0;

        while (q.length > 0) {
            step++;

            const size = q.length;

            for (let i = 0; i < size; i++) {
                const p = q.shift();

                checked.add(p);

                if (p === beginWord) {
                    return step + 1;
                }

                const words = map.get(p);

                for (let word of words) {
                    if (!checked.has(word)) {
                        q.push(word);
                    }
                }
            }
        }


        return 0; 
    }

    isValid(word1, word2) {
        let skip = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                skip++;
            }
        }

        return skip <= 1;
    }
}