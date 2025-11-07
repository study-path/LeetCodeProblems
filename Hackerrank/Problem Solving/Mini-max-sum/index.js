# Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {   
    let min= Number.MAX_SAFE_INTEGER;
    let max = 0;
   
    for(let i = 0; i<arr.length; i++){        
        let s = 0;
        for(let y = 0; y<arr.length;y++){
            if(y != i){
                s = s+arr[y];
            }
        }
        if(s > max){
            max = s;
        }
        if(s < min ){
            min = s
        }        
    }
    console.log(min +" "+ max)
}
