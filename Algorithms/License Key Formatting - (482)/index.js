/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
   let ss = '';
    for(let i = 0; i < s.length; i++){
        if (s[i] != '-')
        {
            ss += s[i];
        }
    }
    s = ss;
    let isKeyPartsEqual = s.length % k == 0;        
    let result= '';
    let countK = 0;
    for(let i = s.length-1; i >= 0; i--){      
        result = s[i] +result;
        countK++;

        if (countK == k && i != 0){
            result = "-" + result;
            countK = 0;
        }
    }    
    return result.toUpperCase();
};