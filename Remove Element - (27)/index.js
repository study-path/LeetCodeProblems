/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {    
   let filteredNums = nums.filter(i => i != val);
    for(let i = 0; i < filteredNums.length; i++){         
        nums[i] = filteredNums[i]
    }
    for(let i = filteredNums.length; i < nums.length; i++){         
        nums[i] = val;
    }
    return filteredNums.length;
};