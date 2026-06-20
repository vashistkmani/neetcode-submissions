class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(typeof s !== "string" || typeof s !== typeof t || s.length !== t.length)
            return false

        const mainstr = new Map();

        for(let i of s){
            if(mainstr.has(i))
                mainstr.set(i, mainstr.get(i) +1)
            else
                mainstr.set(i, 1)
        }
        

        for(let j of t){
            if(mainstr.has(j) && mainstr.get(j) >0)
                mainstr.set(j, mainstr.get(j) -1)
            else 
            return false
        }
        return true
    }
}
