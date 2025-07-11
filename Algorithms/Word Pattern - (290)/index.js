/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {     
   for(let i = 0; i < pattern.length; i++){
       let indexes = [];
       for(let x = 0; x < pattern.length; x++){
           if(pattern[i] == pattern[x]){
               indexes.push(x);          
           }
       }
       if (!checkEquality(indexes, s))
       {
           return false;
       }
   }   
    return true;
}
function checkEquality(indexes, str) {
    let stringArray = str.split(" ");
    let firstWord = stringArray[indexes[0]];
    
    for (let index = 0; index < indexes.length; index++) {      
        if(firstWord != stringArray[indexes[index]]){
            return false;
        }
    }
    
    return true;
}