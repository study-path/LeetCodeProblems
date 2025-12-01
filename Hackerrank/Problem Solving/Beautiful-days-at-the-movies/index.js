# Problem: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
    let days = [];
    let reverseDays = [];  
    let luckydays = [];
    while(i<=j){
        days.push(i);
        i++; 
    }   
    for(let i = 0; i<days.length;i++){
        let day = (days[i]+"").split('').reverse().join('');
        reverseDays.push(+day)      
    }  

    for(let i = 0; i<days.length;i++){
        if( (days[i] - reverseDays[i]) % k === 0){
            luckydays.push(days[i])
        }
    }
return luckydays.length  
}