class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            if (token === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (token === "-") {
                const first = stack.pop();
                const second = stack.pop();
                stack.push(second - first);
            } else if (token === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (token === "/") {
                const first = stack.pop();
                const second = stack.pop();
                stack.push(Math.trunc(second / first));
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
