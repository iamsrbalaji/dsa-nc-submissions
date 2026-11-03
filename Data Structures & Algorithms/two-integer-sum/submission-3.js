class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (prevMap.has(target - nums[i])) {
                return [prevMap.get(target - nums[i]), i];
            }

            prevMap.set(nums[i], i);
        }
        return [];
    }
}
