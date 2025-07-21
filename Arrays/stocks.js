/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minprice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minprice > maxProfit) {
      maxProfit = prices[i] - minprice;
    }
    if (prices[i] < minprice) {
      minprice = prices[i];
    }
  }
  return maxProfit;
};
