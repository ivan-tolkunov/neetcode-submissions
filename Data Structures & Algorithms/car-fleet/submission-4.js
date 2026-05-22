class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = [];

        for (let i = 0; i < position.length; i++) {
            pairs.push({
                p: position[i],
                s: speed[i],
            })
        }

        pairs.sort((a, b) => Number(b.p) - Number(a.p));

        const stack = [];

        for (let p of pairs) {
            const time = (target - p.p) / p.s;
            stack.push(time);

            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }

        }


        return stack.length;
    }
}
