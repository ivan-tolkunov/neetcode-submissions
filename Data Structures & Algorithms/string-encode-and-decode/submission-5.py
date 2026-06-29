class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded = ''
        for s in strs:
            encoded += str(len(s)) + '#' + s
        return encoded

    def decode(self, s: str) -> List[str]:
        decoded = []
        
        i = 0
        while i < len(s):
            j = i
            length = ''
            while s[j] != '#':
                length += s[j]
                j += 1
            length = int(length)
            i = j + length + 1
            decoded.append(s[j+1:i])

        return decoded
