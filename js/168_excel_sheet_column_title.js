/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ''

    while(columnNumber > 0) {
      columnNumber--
      result += String.fromCharCode((columnNumber % 26) + 65)
      columnNumber = Math.floor(columnNumber / 26);
    }

    return result.split('').reverse().join('')
};
