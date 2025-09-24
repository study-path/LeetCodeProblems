
var validPalindrome = function(s) {
    let left = 0;  
    let right = s.length-1;
    while(left < right){
        if(s[left] !== s[right]){
            let x = s.slice(0,left) + s.slice(left+1);
            let y = s.slice(0,right) + s.slice(right +1);           
            return isPalind(x) || isPalind(y);            
        }
        left++;
        right--
    }
    return true

};
function isPalind(s){  
   for(let i = 0; i<s.length/2; i++){
        if(s[i] !== s[s.length-1-i]){ 
          return false
        }
    }
    return true
}