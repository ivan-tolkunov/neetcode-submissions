class Solution {
    patern = '!'
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';

        for (let str of strs) {
            const length = str.length;
            encodedStr += `${length}${this.patern}${str}`;
        }
        
        return encodedStr; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 5!Hello6!Worlds
    decode(str) {
        const decoded = [];
        console.log(str);

        for (let i = 0; i < str.length; i++) {
            let num = '';
            while (str[i] !== this.patern) {
                num += str[i];
                i++;
            }

            num = Number(num);
            const word = str.slice(i + 1, 1 + i + num);
            decoded.push(word);
            i += num;
        }

        return decoded;
    }
}
