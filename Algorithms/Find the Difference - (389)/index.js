/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let occurienceObj = {};
    for(var i =0; i < s.length; i++){
        if (occurienceObj[s[i]]) {
            occurienceObj[s[i]]++;
        }
        else
        {
            occurienceObj[s[i]] = 1;
        }
    }

    for (var i = 0; i < t.length; i++)
    {
        if (occurienceObj[t[i]]) {
            occurienceObj[t[i]]--;
        }
        else
        {
            return t[i];
        }
    }
};