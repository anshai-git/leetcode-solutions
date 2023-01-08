/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s
    .replaceAll(/[^a-zA-Z0-9]/ig, '')
    .toLowerCase()

    if(s.length < 2) return true

    for(let i = 0, j = s.length - 1; i++, j--; i < Math.floor(s.length / 2)) {
      if(s[i] != s[j]) return false
    }

    return true
};
