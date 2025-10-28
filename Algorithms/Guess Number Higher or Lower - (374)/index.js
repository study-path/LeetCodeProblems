/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {      
    if(n === 1){
        return 1
    }
    let myGuess = Math.floor(n/2); 
    let left = 1
    let right = n;
    while(left < right) {         
        const result = guess(myGuess);
        if(result === 1){
            if (left == myGuess)
            {
                left++;
            }
            else
            {
                left = myGuess;
            }
        }
        else if(result === -1){
            if (right == myGuess)
            {
                right--;
            }
            else
            {
                right = myGuess;
            }
        }  
        else {
            break
        }
        myGuess = Math.floor((left + right)/2);
    }  
    return myGuess
};