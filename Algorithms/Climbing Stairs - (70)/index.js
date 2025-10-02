var climbStairs = function(n) {
    let times = 0;
    let prev = 0;
    let next = 1;
    for(let i = 0; i<=n; i++){
        times = prev +next
        next = prev
        prev = times
        
    }
    return times
    
};