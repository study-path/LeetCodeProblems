var addDigits = function(num) {
    while(num  >=10){ 
    let res = 0;
    while(num>0){
        let m = num%10;       
        num =Math.floor(num/10);
        res = res+m       
        }
    num = res;
    }    
    return num
};