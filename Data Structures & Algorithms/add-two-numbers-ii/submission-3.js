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
        let head = null;

        l1 = this.reverse(l1);
        l2 = this.reverse(l2);

        while(l1 || l2 || rest) {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            let sum = v1 + v2 + rest;

            rest = Math.floor(sum / 10);

            const node = new ListNode(sum % 10);

            node.next = head;
            head = node;

            l1 = l1?.next;
            l2 = l2?.next;
        }

        return head;
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
