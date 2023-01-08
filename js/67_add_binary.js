/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = ''
  let carry = false

  let length_diff = Math.abs(a.length - b.length)
  if(length_diff > 0) {
    if(a.length > b.length) {
      b = '0'.repeat(length_diff) + b
    } else {
      a = '0'.repeat(length_diff) + a
    }
  }

  for(let i = a.length-1; i >= 0; i--) {
    let val_a = a[i] || '0'
    let val_b = b[i] || '0'
    if(val_a == '1' && val_b == '1') {
      if(carry) {
        result = '1' + result
      } else {
        result = '0' + result
        carry = true
      }
    } else if (val_a == '1' || val_b == '1') {
      if(carry) {
        result = '0' + result
      } else {
        result = '1' + result
      }
    } else {
      if(carry) {
        result = '1' + result
        carry = false
      } else {
        result = '0' + result
      }
    }
  }

  if(carry) result = '1' + result
  return result
}
