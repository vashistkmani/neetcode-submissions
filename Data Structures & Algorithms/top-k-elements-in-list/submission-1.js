class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap ={};
        for(let num of nums){
            if(freqMap[num]){
                freqMap[num] = freqMap[num] + 1;
            }else{
                freqMap[num] = 1;
            }
        };

        return Object.entries(freqMap).sort((a,b) => b[1] - a[1]).slice(0,k).map(arr => arr[0]) ;
    }
}
