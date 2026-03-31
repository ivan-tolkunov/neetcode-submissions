/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let newHead = null;

        return this.recurtion(newHead, head);
    }

    recurtion(newHead, head) {
        if (!head) {
            return newHead;
        }

        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;

        return this.recurtion(newHead, head);

    }
}
