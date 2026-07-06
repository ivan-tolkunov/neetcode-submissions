/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
      let cur = root;
      let next = cur;
      let prev = null;

      while (cur) {
        while (next && next.left) {

          if (prev) {
            prev.next = next.left;
          }

          next.left.next = next.right;
          prev = next.right;
          next = next.next;
        }

        prev = null;
        cur = cur.left;
        next = cur;
      }

      return root;
    }

}
