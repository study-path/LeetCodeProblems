/**
 * @param {number[]} prices
 * @return {number}
 */
 
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
 
    for(let i = 1; i < prices.length; i++){                
        if( minPrice > prices[i]){
           minPrice = prices[i];          
        }
        else{
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit,profit)
        }    
    }
    return maxProfit;
};