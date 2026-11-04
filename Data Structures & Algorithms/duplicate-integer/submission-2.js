class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length <= 1)
            return false;

        const mySet = new Set();
        for (const n of nums)
        {
            if(mySet.has(n))
                return true;
            mySet.add(n);
        }
        return false;

    }
}
