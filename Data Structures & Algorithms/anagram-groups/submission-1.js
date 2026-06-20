class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramObj ={};
        for(let i of strs){
            const st = i.split("").sort();
            if(anagramObj[st]){
                anagramObj[st].push(i)
            }else{
                anagramObj[st] = [i];
            }
        };
        return Object.values(anagramObj);
    };

}
