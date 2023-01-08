/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(ct) {
    let res = 0
    let m = 1
    
    for(let i = ct.length - 2; i >= 0; i--) {
      res += (ct[i].charCodeAt() - 64) * Math.pow(26, m++)
    }

    return res + ct[ct.length-1].charCodeAt() - 64
};
