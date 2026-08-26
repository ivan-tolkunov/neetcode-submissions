class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        el = arr[len(arr) - 1];
        arr[len(arr) - 1] = -1;

        for i in range (len(arr) - 2, -1, -1):
            tmp = arr[i]
            arr[i] = el
            if el < tmp:
                el = tmp

        return arr
        