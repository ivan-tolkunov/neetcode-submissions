class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;

        let prev = null;

        while (second) {
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        second = prev;

        let first = head;

        while (second) {
            const tmp1 = first.next;
            const tmp2 = second.next;

            first.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }
}