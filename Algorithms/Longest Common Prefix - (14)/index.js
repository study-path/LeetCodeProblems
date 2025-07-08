/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 0){
        return ""
    }
    else{
        let result = '';
        let mainWord = strs[0];
        for(let i = 0; i < mainWord.length; i++){
            let firstChar = mainWord[i];
            let countWords = 0;
            for(let y = 1; y <strs.length; y++){
                let word = strs[y];                
                if(firstChar == word[i]){
                    countWords++;
                }
                else{
                    break;
                }
            }
            if(countWords == strs.length -1){
                result+=firstChar;
            }
            else{
                break;
            }
        }
        return result
    }   
};