class Solution {
    minWindow(s, t) {
        if (s.length < t.length) return "";

        const needMap = new Map();

        for (let ch of t) {
            needMap.set(ch, (needMap.get(ch) ?? 0) + 1);
        }

        const window = new Map();
        let have = 0;
        let need = needMap.size;

        let res = "";
        let resLen = Infinity;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            window.set(ch, (window.get(ch) ?? 0) + 1);

            if (
                needMap.has(ch) &&
                window.get(ch) === needMap.get(ch)
            ) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < resLen) {
                    res = s.slice(left, right + 1);
                    resLen = right - left + 1;
                }

                const leftCh = s[left];
                window.set(leftCh, window.get(leftCh) - 1);

                if (
                    needMap.has(leftCh) &&
                    window.get(leftCh) < needMap.get(leftCh)
                ) {
                    have--;
                }

                left++;
            }
        }

        return res;
    }
}