/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {  
  let nums_met = new Set()
  
  while (n != 1) {
    n = process_num(n)
    if(nums_met.has(n)) break
    nums_met.add(n)
  }

  return n == 1
}

function process_num(n) {
  let sum = 0
  while(n) {
    let digit = n % 10
    sum += digit * digit
    n = Math.floor(n / 10)
  }
  return sum
 }
