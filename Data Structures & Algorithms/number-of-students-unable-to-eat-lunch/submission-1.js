class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let n = students.length;
        let res = n;
        let index = 0;

        for (let sandwich of sandwiches) {
            let count = 0;

            while ( count < n && students[index] !== sandwich) {
                index++;
                index %= n;
                count++;
            }

            if (students[index] === sandwich) {
                res--;
                students[index] = -1;
            } else {
                break;
            }
        }
        return res;
    }
}
