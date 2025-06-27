/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 1 && s[0] === " "){
        return true
    }   
    let newStr = s.replace(/[^a-zA-Z0-9]/g,'');    
    newStr = newStr.toLowerCase(); 
    let center = Math.floor(newStr.length/2)
    let firstHalfStr = newStr.slice(0, center);
   
 
    for(let i = 0; i < center; i++){       
      if(newStr[i] !== newStr[newStr.length-1-i]){
        return false
      }              
    }
    return true
};