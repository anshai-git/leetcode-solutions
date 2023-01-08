/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows == 1) return [[1]]
  let all_rows = [[1]]
  let last_row = [1]
  let current_row = null
  
  for(let i = 2; i <= numRows; i++) {
     let new_row = []
     new_row[0] = 1
     new_row[i-1] = 1

     for(let j = 1; j < i-1; j++) {
      new_row[j] = last_row[j-1] + last_row[j]
     }

     last_row = new_row
     all_rows.push(new_row)
  }

  return all_rows
};
