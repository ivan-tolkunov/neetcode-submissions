class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];

        for (let num of nums) {
            const sum = (this.prefix[this.prefix.length - 1] ?? 0) + num;
            this.prefix.push(sum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const sum = this.prefix[left - 1] ?? 0;

        return this.prefix[right] - sum;
    }
}
