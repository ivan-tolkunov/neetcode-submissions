class PrefixTree {
    constructor() {
        this.list = Array(26).fill(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let layer = this.list;

        for (let i = 0; i < word.length; i++) {
            const code = this.getIndex(word[i]);

            if (layer[code] === 0) {
                layer[code] = {
                    path: Array(26).fill(0),
                    isEnd: false
                };
            }

            if (i === word.length - 1) {
                layer[code].isEnd = true;
            }

            layer = layer[code].path;
        }
    }

    getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let layer = this.list;
        for (let i = 0; i < word.length; i++) {
            const code = this.getIndex(word[i]);

            if (layer[code] === 0) {
                return false;
            }

            if (i === word.length - 1 && layer[code].isEnd) {
                return true;
            }

            layer = layer[code].path;
        }

        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let layer = this.list;
        for (let i = 0; i < prefix.length; i++) {
            const code = this.getIndex(prefix[i]);

            if (layer[code] === 0) {
                return false;
            }

            layer = layer[code].path;
        }
        
        return true;
    }
}
