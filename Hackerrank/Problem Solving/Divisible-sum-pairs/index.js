# Problem: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
   
    let count = 0;
    for(let i = 0; i<ar.length; i++){
        for(let y= i; y< ar.length; y++){
            if((ar[i] + ar[y+1]) % k === 0){
                count++;
            }
        }
    }
    return count
}