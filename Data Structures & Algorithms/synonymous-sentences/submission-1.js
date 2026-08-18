class Solution {
    /**
     * @param {string[][]} synonyms
     * @param {string} text
     * @return {string[]}
     */
    generateSentences(synonyms, text) {
        const graph = new Map();

        for (const [word1, word2] of synonyms) {
            if (!graph.has(word1)) graph.set(word1, []);
            if (!graph.has(word2)) graph.set(word2, []);

            graph.get(word1).push(word2);
            graph.get(word2).push(word1);
        }

        const map = new Map();
        const visited = new Set();

        for (const word of graph.keys()) {
            if (visited.has(word)) continue;

            const group = [];
            const stack = [word];

            while (stack.length) {
                const current = stack.pop();

                if (visited.has(current)) continue;

                visited.add(current);
                group.push(current);

                for (const next of graph.get(current)) {
                    if (!visited.has(next)) {
                        stack.push(next);
                    }
                }
            }

            for (const current of group) {
                map.set(
                    current,
                    group.filter(word => word !== current)
                );
            }
        }

        const words = text.split(' ');

        let res = [""];

        console.log(map);

        for (let word of words) {
            let size = res.length;

            if (map.has(word)) {
                for (let value of map.get(word)) {
                    for (let i = 0; i < size; i++) {
                        res.push(`${res[i]}${value} `);
                    }
                }
            }

            for (let i = 0; i < size; i++) {
                res[i] += `${word} `; 
            }
        }

        for (let i = 0; i < res.length; i++) {
            res[i] = res[i].trim();
        }

        return res.sort();
    }
}
