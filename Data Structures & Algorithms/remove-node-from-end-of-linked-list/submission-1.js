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
        let left = head;
        let right = head;

        for (let i = 0; i < n; i++) {
            right = right.next;
        }

        let prev = null;

        while (right) {
            prev = left;
            left = left.next;
            right = right.next;
        }

        if (!prev) {
            head = head.next;
            return head;
        }

        prev.next = left.next;
        left.next = null;

        return head;
    }
}
