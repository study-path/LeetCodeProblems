/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {  
     let openBracket = [];
    let openCurly = [];
    let openSquare = []; 
    let openBrackets = []; 
    if(s.length < 2 || s.length % 2 != 0){
        return false
    }
    for(let i = 0; i < s.length; i++){
        if(s[i] == '{'){
            openCurly.push(s[i]);
            openBrackets.push(s[i])
        }
        else if(s[i] == '('){
            openBracket.push(s[i]);
            openBrackets.push(s[i])
        }
        else if(s[i] == '['){
            openSquare.push(s[i]);
            openBrackets.push(s[i])
        }
        else if(s[i] == '}'){
            if(openBrackets[openBrackets.length - 1] == '{'){
                openCurly.pop(s[i]);
                openBrackets.pop(s[i])
            }
            else return false
        }
        else if(s[i] == ')'){
            if(openBrackets[openBrackets.length - 1] == '('){
                openBracket.pop(s[i]);
                openBrackets.pop(s[i])
            }
            else return false
        }
        else if(s[i] == ']' ){
            if(openBrackets[openBrackets.length - 1] == '['){
                openSquare.pop(s[i]);
                openBrackets.pop(s[i])
            }
            else return false
        }
    }
    return (openBracket.length == 0 && openCurly.length == 0 && openSquare.length == 0 )   
   
};