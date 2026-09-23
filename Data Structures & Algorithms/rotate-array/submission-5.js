class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void}
     */
    rotate(nums, k) {
        const n = nums.length;
        k = k % n;

        if (k === 0) {
            return;
        }

        let moved = 0;
        let start = 0;

        while (moved < n) {
            let index = start;
            let tmp = nums[index];

            do {
                const next = (index + k) % n;

                const tmp1 = nums[next];
                nums[next] = tmp;
                tmp = tmp1;

                index = next;
                moved++;
            } while (index !== start);

            start++;
        }
    }
}