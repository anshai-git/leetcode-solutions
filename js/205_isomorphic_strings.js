/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if((!s || !t) || s.length != t.length) return false

  let pairs = new Map()
  let set = new Set()
  
  let i = 0
  for(let c of s) {
    if(!pairs.has(c)) {
      pairs.set(c, t[i])
      if(set.has(t[i])) {
        return false
      }
      set.add(t[i++])
    } else if(pairs.get(c) != t[i++]) {
      return false
    }
  }

  return true

};
