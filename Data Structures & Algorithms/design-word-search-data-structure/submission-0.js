class WordDictionary {
    constructor() {
        this.children = Array.from({length: 26}, () => null);
        this.isEnd = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.add(word, this, 0);
    }

    add(word, node, i) {
        if (i === word.length) {
            node.isEnd = true;
            return;
        }

        const index = word.charCodeAt(i) - 97;

        if (!node.children[index]) {
            node.children[index] = new WordDictionary();
        }

        this.add(word, node.children[index], i + 1);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.helper(word, this, 0);
    }

    helper(word, node, i) {
        if (i === word.length) {
            return node.isEnd;
        }

        if (word[i] === '.') {
            for (let j = 0; j < node.children.length; j++) {
                if (node.children[j]) {
                    if (this.helper(word, node.children[j], i + 1)) {
                        return true;
                    }
                }
            }
        }

        const index = word.charCodeAt(i) - 97;

        if (!node.children[index]) {
            return false;
        }

        return this.helper(word, node.children[index], i + 1);
    }
}
