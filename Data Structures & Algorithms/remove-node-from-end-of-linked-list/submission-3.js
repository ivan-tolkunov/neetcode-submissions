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

        const arr = [];
        let node = head;

        while (node) {
            arr.push(node);
            node = node.next;
        }
         
        const index = arr.length - n;

        if (index === 0) {
            head = head.next;
            return head;
        }

        arr[index - 1].next = arr[index + 1] ?? null;

        return head;
    }
}
