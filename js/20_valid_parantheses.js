var isValid = function(s) {
  let stack = []
  let pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  let opening = ['{', '[', '(']

  for (let p of s) {
    const current_closeale = stack.length ? stack[stack.length - 1] : null

    if (current_closeale) {
      if (opening.includes(p)) {
        stack.push(p)
      } else {
        if (pairs[current_closeale] == p) {
          stack.pop()
        } else {
          return false
        }
      }
    } else {
      stack.push(p)
    }
  }

  return !stack.length 
}
