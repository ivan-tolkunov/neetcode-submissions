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
        const map = new Map();

        const dummy = new Node(0);

        let og = head;
        let copy = dummy;

        while (og) {
            copy.next = new Node(og.val);
            copy = copy.next;

            map.set(og, copy);
            og = og.next;
        }

        og = head;
        copy = dummy.next;

        while (og) {
            copy.random = map.get(og.random);
            og = og.next;
            copy = copy.next;
        }

        return dummy.next;
    }
}
