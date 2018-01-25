/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var result = 0;
    for (var i = 1; i<=prices.length; i++ ){
        if(prices[i]>prices[i-1]){
            result += prices[i]-prices[i-1];
        }
    }
    return result;
};
