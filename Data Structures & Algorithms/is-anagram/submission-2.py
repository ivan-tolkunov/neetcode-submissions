class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        rule = {}

        for index in range(0, len(s)):
            rule[s[index]] = rule.get(s[index], 0) + 1
            rule[t[index]] = rule.get(t[index], 0) - 1

        for value in rule.values():
            if value != 0:
                return False

        return True