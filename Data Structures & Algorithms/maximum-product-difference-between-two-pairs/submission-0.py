class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        if (len(nums) < 4):
            return -1

        sorted_nums = sorted(nums);

        return (sorted_nums[len(nums) - 1] * sorted_nums[len(nums) - 2]) - (sorted_nums[0] * sorted_nums[1]);
        