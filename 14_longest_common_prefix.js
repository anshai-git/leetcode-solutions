function longestCommonPrefix(strs) {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]

  for(let i = strs[0].length; i > 0; i--){
    let substring = strs[0].substring(0, i)
    let all_match = true
    strs.forEach(str => {
      if(!str.startsWith(substring)) all_match = false
    })
    if(all_match) return substring
  }

  return ''
};
