/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
   if(words.length  == 1) {
        return Array.from(words[0])
   }
   let sameChars = []
    debugger
    let firstWord =words[0]; 
    for(let i = 0; i <= firstWord.length; i++){
        let numberBefore = getNumberOfCharBeforeIndex(firstWord, i);
        let countLet = 1;
        for(let x = 1; x <= words.length-1; x++){
            let c = getNumberOfChar(words[x], firstWord[i]);
            if(numberBefore+1 <=  c){
                countLet++;
                if(countLet >= words.length)
                {
                  sameChars.push(firstWord[i]);
                  countLet = 1
                }               
            }
            else break
        }           
    }    
    return sameChars
};
function getNumberOfCharBeforeIndex(str, i) {
    let ch = str.charAt(i);
    let count = 0;
    for(let x = 0;x < i; x++){
        if(str[x] === ch){
            count++;
        }
    }
    return count
}

function getNumberOfChar(str, c) {
    let count = 0;
    for(let x = 0; x < str.length; x++){
        if(str[x] === c){
            count++;
        }
    }
    return count
}