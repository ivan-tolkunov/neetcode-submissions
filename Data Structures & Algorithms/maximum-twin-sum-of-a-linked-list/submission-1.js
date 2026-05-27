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
        const map = new Map();
        let i = 0;

        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            map.set(i, slow);
            fast = fast.next.next;
            slow = slow.next;
            i++;
        }

        let sum = 0;

        while (i > 0) {
            i--;
            sum = Math.max(slow.val + map.get(i).val, sum);
            slow = slow.next;
        }

        return sum;
    }
}
