class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const freq = new Array(26).fill(0);
        for (const char of s) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const maxHeap = new MaxPriorityQueue(([count, _]) => count);
        
        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                maxHeap.enqueue([
                    freq[i],
                    String.fromCharCode(i + 'a'.charCodeAt(0)),
                ]);
            }
        }

        let res = '';
        let prev = null;

        while(!maxHeap.isEmpty() || prev) {
            if (prev && maxHeap.isEmpty()) {
                return '';
            }
            
            const [count, char] = maxHeap.dequeue();
            res += char;

            if (prev) {
                maxHeap.enqueue(prev);
                prev = null;
            }

            if (count > 1) {
                prev = [count - 1, char];
            }
        }

        return res;
    }
}
