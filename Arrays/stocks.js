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

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Move zeros to the end in-place while keeping order.
// Medium: Container With Most Water: why pointers meet-in-the-middle works.
// Hard: Trap Rain Water in O(n) with two pointers; derive left/right max logic.
