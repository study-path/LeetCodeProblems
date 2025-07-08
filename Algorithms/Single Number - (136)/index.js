/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    nums.sort(function(a, b){return a - b})
    for(let i = 0; i <nums.length; i++){
        if(nums[i] === nums[i+1]){
            i++;         
        }
        else if( i === nums.length-1)
        {
            return nums[i]
        }
         else{
            return nums[i] 
        }
    }
};