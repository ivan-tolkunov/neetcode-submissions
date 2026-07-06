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
      const q = new Queue();
      q.push([root]);
      
      while(!q.isEmpty()) {
        const layer = q.pop();
        const newLayer = [];

        for (let i = 0; i < layer.length; i++) {
          if (layer[i]) {
            layer[i].next = layer[i + 1] ? layer[i + 1] : null;
            newLayer.push(layer[i].left);
            newLayer.push(layer[i].right);
          }
        }
        if (newLayer.length > 0) {
          q.push(newLayer);
        }
      }

      return root;
    }
}
