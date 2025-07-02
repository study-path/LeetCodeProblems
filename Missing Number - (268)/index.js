/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortedNums = nums.sort((a,b)=>{return a - b});

    for(let i = 0; i < sortedNums.length; i++){
        if(sortedNums[i] !== i){
            return i
        }
    }
    return nums.length
};