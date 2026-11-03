class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
         return false;
        }

        const lMap = new Map();
        const rMap = new Map();

        for (let i = 0; i < s.length; i++)
        {
            lMap.set(s[i], (lMap.get(s[i]) || 0)+1);
            rMap.set(t[i], (rMap.get(t[i]) || 0)+1);
        }

        for (const [key, count] of lMap)
        {
            if(!rMap.has(key) || (count !== rMap.get(key)))
            {
             return false;
            }
        }
        return true;
    }
}