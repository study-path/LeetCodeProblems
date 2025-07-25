/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length != goal.length){
        return false
    }
    let newStr =''
    for(let i = 0; i<goal.length; i++){
        s = s.slice(1).concat(s[0])
        if(s===goal){
            return true
        }
    }
    return false
};