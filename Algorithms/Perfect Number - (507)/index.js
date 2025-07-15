/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   let sum = 0;   
    let devisors = []
    for(let i = 1; i<num; i++){
        if(num % i === 0  ){           
          devisors.push(i)
        }
    }
   for(let i = 0; i < devisors.length; i++){
        sum = sum + devisors[i]
    }
    if(sum === num){
        return true
    }
    else return false
};