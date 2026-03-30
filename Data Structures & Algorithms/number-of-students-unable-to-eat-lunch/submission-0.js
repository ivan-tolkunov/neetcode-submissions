class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count = 0;
        while (true) {
            const student = students.shift();
            if (student === sandwiches[0]) {
                count = 0;
                sandwiches.shift();
            } else {
                count++;
                students.push(student);
            }

            if (count === students.length) {
                return students.length;
            }
        }
    }
}
