/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let newArr = [];
    let zeros = [];
    for(let i = 0; i<nums.length; i++){        
        if(nums[i] != 0 ){
           newArr.push(nums[i]);            
        }
        else if(nums[i] === 0){
            zeros.push(nums[i]);
        }
    }
    let x = newArr.concat(zeros);
    for(let i = 0; i< x.length;i++){
        nums[i]=x[i]
    }
    
};