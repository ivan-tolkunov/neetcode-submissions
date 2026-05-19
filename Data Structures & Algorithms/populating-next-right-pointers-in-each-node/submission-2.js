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
    if (!root) return null;

    let level = root;

    while (level.left) {
      let cur = level;

      while (cur) {
        cur.left.next = cur.right;

        if (cur.next) {
          cur.right.next = cur.next.left;
        }

        cur = cur.next;
      }

      level = level.left;
    }

    return root;
  }
}
