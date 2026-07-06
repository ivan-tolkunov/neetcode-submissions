# The knows API is already defined for you.
# return a bool, whether a knows b
# def knows(a: int, b: int) -> bool:
import numpy as np

class Solution:
    def findCelebrity(self, n: int) -> int:
        matrix = np.zeros((n, n))

        for r in range(n):
            for c in range(n):
                if knows(r, c):
                    matrix[r][c] = 1

        for c in range(n):
            isCelebrity = True
            for r in range(n):
                if matrix[r][c] != 1:
                    isCelebrity = False
                    break
            if isCelebrity:
                for i in range(n):
                    if matrix[c][i] != 0 and  c != i:
                        isCelebrity = False
                        break
                if isCelebrity:
                    return c
                
        return -1