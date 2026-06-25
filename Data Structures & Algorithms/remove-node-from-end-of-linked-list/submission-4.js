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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) {
            return head;
        }

        let left = head;
        let right = head;

        while (right && n > 0) {
            right = right.next;
            n--;
        }

        if (!right) {
            head = head.next ?? null;

            return head;
        }

        let prev = null;

        while (right) {
            prev = left;
            left = left.next;
            right = right.next;
        }

        prev.next = prev.next?.next ?? null;

        return head;
    }
}
