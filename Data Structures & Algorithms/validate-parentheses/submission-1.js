class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) {
            return false;
        }
        
        const stack = [];

        const openBrackets = "([{";

        for (let i = 0; i < s.length; i++) {
            if (openBrackets.includes(s.charAt(i))) {
                stack.push(s.charAt(i));
                continue;
            }

            switch (stack.pop()) {
                case '(':
                    if (s.charAt(i) !== ')') return false;
                    break;
                case '{':
                    if (s.charAt(i) !== '}') return false;
                    break;
                case '[':
                    if (s.charAt(i) !== ']') return false;
                    break;
            }
        }

        return true;
    }
}
