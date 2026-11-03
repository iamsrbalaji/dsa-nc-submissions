class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map([[')','('], ['}','{'], [']','[']]);
        const stack = [];

        for (const ch of s) {
            if (map.has(ch)) {
                if (stack.pop() !== map.get(ch)) return false;
            } else {
                stack.push(ch);
            }
        }

        return stack.length === 0;
    }
}
