class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 === 1) return false;
        const stack = []
        const myMap = new Map();
        myMap.set(')','(')
            .set('}','{')
            .set(']','[')
        for(const str of s)
        {
            if(myMap.has(str))
            {
                if(stack.length > 0 && stack[stack.length-1] === myMap.get(str))
                {
                    stack.pop(str);
                }
                else
                {
                return false;
                }
            }
            else
            {
                stack.push(str);
            }
        }
        return stack.length === 0
    }
}
