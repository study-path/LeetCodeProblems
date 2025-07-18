/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let text = x.toString();
    let newText='';
    for(let i = text.length-1; i>=0; i--){
        newText = newText +text[i]
    }
    return text == newText    
};