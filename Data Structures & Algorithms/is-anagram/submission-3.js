class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const charCounts = {};

        for (let i = 0; i < s.length; i++)
        {
            charCounts[s[i]] = (charCounts[s[i]] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++)
        {
            const char = t[i];
            if(!charCounts[char])
                return false;
            const currCount = charCounts[char];
            if(currCount === 1)
                delete charCounts[char];
            else
                charCounts[char] = charCounts[char]-1;
        }

        return true;
    }
}