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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let head = null;
        let pointer = null;

        while (true) {
            let min = Infinity;
            let minIdx = 0;

            for (let i = 0; i < lists.length; i++) {
                const el = lists[i];

                if (!el) {
                    continue;
                }

                if (el.val < min) {
                    min = el.val;
                    minIdx = i;
                }
            }

            if (min === Infinity) {
                return head;
            }

            const node = lists[minIdx];

            if (!head) {
                head =  node;
                pointer =  node;
            } else {
                pointer.next =  node;
                pointer = node;
            }

            lists[minIdx] = lists[minIdx].next;
        }
    }
}
