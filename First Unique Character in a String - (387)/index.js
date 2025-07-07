/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {   
     let arr = [];
    
    for(let i = 0; i < s.length; i++){
        if (!arr.includes(s[i]))
        {        
            let isNotFound = true;
            for(let j = i+1; j < s.length; j++){
                if(s[i] == s[j]){
                    isNotFound = false;
                    arr.push(s[i]);
                    break;                
                }            
            } 
            if(isNotFound)
            {
                return i;
            }
        }
    }
    return -1
};