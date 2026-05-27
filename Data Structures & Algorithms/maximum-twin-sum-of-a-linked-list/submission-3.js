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
        let i = 0;

        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
            i++;
        }

        let sum = 0;

        while (i > 0) {
            let node = slow;

            for (let j = 1; j < i; j++) {
                node = node.next;
            }

            sum = Math.max(sum, node.val + head.val);
            head = head.next;
            i--;
        }

        return sum;
    }
}
