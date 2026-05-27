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
            fast = fast.next.next;
            slow = slow.next;
            i++;
        }

        const len = i * 2;

        while (slow) {
            map.set(i, slow);
            slow = slow.next;
            i++;
        }

        i = 0;
        let sum = 0;

        while (i < len / 2) {
            sum = Math.max(head.val + map.get(len - 1 - i).val, sum);
            head = head.next;
            i++;
        }

        return sum;
    }
}
