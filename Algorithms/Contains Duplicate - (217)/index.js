/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sorted = nums.sort();
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i+1]){
            return true
        }
        
    }
    return false
};