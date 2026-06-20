class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i=0; i<nums.length; i++){
            const currentValue = nums[i];
            const num = target - currentValue;
            if(map.has(num)){
                return [map.get(num), i];
            };
            map.set(currentValue, i);
        }
    }
}
