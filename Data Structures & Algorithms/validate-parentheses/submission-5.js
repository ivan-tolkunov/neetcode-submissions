class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let ch of s) {
            let valid = true;
            if (ch === '(') {
                stack.push(ch);
            } else if (ch === ')') {
                valid = stack.pop() === '(';
            } else if (ch === '[') {
                stack.push(ch);
            } else if (ch === ']') {
                valid = stack.pop() === '[';
            } else if (ch === '{') {
                stack.push(ch);
            } else if (ch === '}') {
                valid = stack.pop() === '{';
            }
            if (!valid) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
