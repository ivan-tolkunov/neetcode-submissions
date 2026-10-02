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
        let rest = 0;

        let dummy = new ListNode();
        const res = dummy;

        l1 = this.reverse(l1);
        l2 = this.reverse(l2);

        while(l1 || l2 || rest) {
            let node = new ListNode();
            let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + rest;
            rest = 0;

            if (sum > 9) {
                sum -= 10;
                rest = 1;

                node.val = sum;
            } else {
                node.val = sum;
            }

            dummy.next = node;
            dummy = node;

            l1 = l1?.next;
            l2 = l2?.next;
        }

        return this.reverse(res.next);
    }

    reverse(list) {
        let prev = null; 

        while (list) {
            const tmp = list.next;
            list.next = prev;
            prev = list;
            list = tmp;
        }

        return prev;
    }
}
