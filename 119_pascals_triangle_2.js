/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex == 0) return [1]
  let last_row = [1]
  
  for(let i = 2; i <= rowIndex+1; i++) {
     let new_row = []
     new_row[0] = 1
     new_row[i-1] = 1

     for(let j = 1; j < i-1; j++) {
      new_row[j] = last_row[j-1] + last_row[j]
     }

     last_row = new_row
  }

  return last_row
};
