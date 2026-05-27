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
     * @return {number}
     */
    pairSum(head) {
        let slow = head;
        let fast = head;
        let prev = null;
        let sum = 0;

        while(fast && fast.next) {
            fast = fast.next.next;
            const tmp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = tmp;
        }

        while (slow) {
            sum = Math.max(slow.val + prev.val, sum);
            slow = slow.next;
            prev = prev.next;
        }

        return sum;
    }
}
