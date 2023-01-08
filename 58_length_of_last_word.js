/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let char_count = 0
  let first_char_index = s.length-1
  while(s[first_char_index] == ' ') first_char_index--

  for(let i = first_char_index; i >= 0; i--) {
    if(s[i] == ' ') return char_count
    char_count++
  }

  return Math.min(char_count, s.length)
}
