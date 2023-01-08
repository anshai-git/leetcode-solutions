/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 0 || n == 1 || n == 2) return n

    let ways = 0;
    let current = 1;
    let before = 1;

    for(let i = 1; i < n; i++) {
      ways = current + before;
      before = current;
      current = ways;
    }

    return ways
};
