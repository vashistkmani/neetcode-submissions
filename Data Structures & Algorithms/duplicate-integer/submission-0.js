class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dup = new Map();
        for(let i of nums){
            if(dup.has(i)){
                return true
            }else{
                dup.set(i,1)
            }
        }
        return false
    }
}
