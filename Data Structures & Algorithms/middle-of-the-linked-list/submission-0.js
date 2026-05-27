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
     * @return {ListNode}
     */
    middleNode(head) {
        let node = head;
        let fastNode = head;

        while (fastNode) {
            fastNode = fastNode.next;

            if (!fastNode) {
                return node;
            }

            node = node.next;

            fastNode = fastNode.next;
        }

        return node;
    }
}
