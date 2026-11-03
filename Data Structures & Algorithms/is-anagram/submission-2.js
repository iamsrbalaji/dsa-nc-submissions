class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const charCounts = new Map();

        // Step 1: Count characters from the first string
        for (let i = 0; i < s.length; i++) {
            charCounts.set(s[i], (charCounts.get(s[i]) || 0) + 1);
        }

        // Step 2: Decrement counts using the second string
        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            
            // If the character doesn't exist in the map, they aren't anagrams
            if (!charCounts.has(char)) return false;

            const currentCount = charCounts.get(char);
            if (currentCount === 1) {
            charCounts.delete(char); // Clean up the key if it hits zero
            } else {
            charCounts.set(char, currentCount - 1);
            }
        }

        // Step 3: If the map is empty, all characters matched perfectly
        return charCounts.size === 0;
    }
}