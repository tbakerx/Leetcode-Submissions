/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length-1]<9){
        digits[digits.length-1]+=1;
    }else {
        if(allNine(digits)){
           digits[0]=1;
           for(var i = 1; i<digits.length; i++ ){
               digits[i]=0;
           }
           digits.push(0); 
        } else{
        digits[digits.length-1]=0;
        for (var i = digits.length-2; i>=0; i--){
            if(digits[i]<9){digits[i]+=1; break;}
            digits[i]=0;
        }
        }    
    }
    return digits;
};

function allNine(digits){
   for (var i = 0; i<digits.length; i++){
       if (digits[i] != 9){return false};
   } return true;
}
