/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    for(let i = digits.length-1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i] ++
            return digits
        }
        
        digits[i] = 0
    }
    
    let result = [];
    for(let i = 0; i < digits.length+1; i++){
       result[i] = 0
    }
    result[0] = 1

    return result
};
