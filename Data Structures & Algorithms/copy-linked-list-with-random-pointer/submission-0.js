// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const ogMap = new Map();
        const copyMap = new Map();

        ogMap.set(null, 0);
        copyMap.set(0, null);

        const dummy = new Node(0);

        let og = head;
        let copy = dummy;
        let index = 1;

        while (og) {
            copy.next = new Node(og.val);
            copy = copy.next;

            ogMap.set(og, index);
            copyMap.set(index, copy);

            og = og.next;
            index++;
        }

        og = head;
        copy = dummy.next;

        while (og) {
            copy.random = copyMap.get(ogMap.get(og.random));
            og = og.next;
            copy = copy.next;
        }

        return dummy.next;
    }
}
