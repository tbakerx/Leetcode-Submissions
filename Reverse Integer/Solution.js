/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    
    while(x!=0){
        
        result *= 10;
        result += x%10;
        x -= x % 10;
        x /= 10;
    }
        if (result>2147483647 || result<-2147483647){
        return 0;
    }else
    return result;
};
