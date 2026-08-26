class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        rule = {}

        for ch in s:
            if ch in rule:
                rule[ch] = 1 + rule[ch]
            else:
                rule[ch] = 1
        

        for ch in t:
            if ch in rule:
                rule[ch] = rule[ch] - 1
            else:
                return False

        for key in rule:
            if rule[key] != 0:
                return False

        return True