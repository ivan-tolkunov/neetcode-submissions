class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        let index = 0;
        let left = 0;
        let right = 1;

        while (right < chars.length) {
            if (chars[left] !== chars[right]) {
                chars[index] = chars[left];
                index++;

                let count = right - left;

                if (count > 1) {
                    count = count.toString();
                    for (let i = 0; i < count.length; i++) {
                        chars[index] = count[i];
                        index++;
                    }
                }

                left = right;
            }

            right++;
        }

        if (left !== right) {
            chars[index] = chars[left];
            index++;

            let count = right - left;

            if (count > 1) {
                count = count.toString();
                for (let i = 0; i < count.length; i++) {
                    chars[index] = count[i];
                    index++;
                }
            }
        }

        return index;
    }
}
