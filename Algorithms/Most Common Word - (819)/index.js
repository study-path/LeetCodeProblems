/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let max = 0;
    let str = '';
        
    let words = paragraph.toLowerCase().split(/[ ;:'"`,.!?\-]+/);
    for(let i = 0; i < banned.length; i++){
        words = words.filter(w => w != banned[i]);
    }  
    words = words.filter(w => w != "");
        
    for(let i = 0; i < words.length; i++){
        let count = 0;
        for(let x =0; x < words.length;x++){             
            if(words[i] === words[x]) {
                    count++;
            }
        }

        if(count > max){
            max = count;
            str = words[i]
        }
    }  
    return str;
};