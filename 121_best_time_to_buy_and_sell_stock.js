/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0
  let sell = 0

  let profit = 0

  while(sell < prices.length) {
    if(prices[buy] < prices[sell]) {
      let dif = prices[sell] - prices[buy]
      if(profit < dif) profit = dif
    } else {
      buy = sell
    }
    sell++
  }

  return profit
}
