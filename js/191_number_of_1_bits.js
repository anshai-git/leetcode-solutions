/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let i = 0, count = 0
  while (i < 32) if (n & (1 << i++)) count++
  return count
};
