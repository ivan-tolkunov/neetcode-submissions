class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let ast of asteroids) {
            if (ast > 0) {
                stack.push(ast);
            } else {

                let last = stack[stack.length - 1] ?? null;

                while (last && last > 0) {
                    if (last < Math.abs(ast)) {
                        stack.pop();
                    } else if (last === Math.abs(ast)) {
                        stack.pop();
                        break;
                    } else {
                        break;
                    }
                    last = stack[stack.length - 1];
                }

                if (!last || last < 0) {
                    stack.push(ast);
                }
            }
        }

        return stack;
    }
}
