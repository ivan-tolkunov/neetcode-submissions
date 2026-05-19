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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;

        let left = 0;

        while (l1 || l2) {
            const sum = (l1? l1.val : 0) + (l2 ? l2.val : 0) + left;
            let val = sum;

            if (sum > 9) {
                left = 1;
                val = sum % 10;
            } else {
                left = 0;
            }

            cur.next = new ListNode(val);
            cur = cur.next;

            l1 = l1?.next;
            l2 = l2?.next;
        }

        while(left === 1) {
            const sum = (l1? l1.val : 0) + (l2 ? l2.val : 0) + left;
            let val = sum;

            if (sum > 9) {
                left = 1;
                val = sum % 10;
            } else {
                left = 0;
            }

            cur.next = new ListNode(val);
        }

        return dummy.next;
    }
}
