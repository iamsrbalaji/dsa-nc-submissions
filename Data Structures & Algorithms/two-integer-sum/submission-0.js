class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const resMap = new Map();
        for (const [index, value] of nums.entries())
        {
            const diff = target - value;
            if (resMap.has(diff))
            {
                return [resMap.get(diff), index];
            }
            resMap.set(value, index);
        }
        return [-1,-1];
    }
}
