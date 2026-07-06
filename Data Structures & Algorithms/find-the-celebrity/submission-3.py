# The knows API is already defined for you.
# return a bool, whether a knows b
# def knows(a: int, b: int) -> bool:
import numpy as np

class Solution:
    def findCelebrity(self, n: int) -> int:
        for c in range(n):
            isCelebrity = True
            for r in range(n):
                if not knows(r, c):
                    isCelebrity = False
                    break
            if isCelebrity:
                for i in range(n):
                    if knows(c, i) and  c != i:
                        isCelebrity = False
                        break
                if isCelebrity:
                    return c
                
        return -1