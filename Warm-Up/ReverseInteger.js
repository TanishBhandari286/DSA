/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // this code doesnt work for -ve no's

  xcopy = x
  x = Math.abs(x)
  let rem = 0;
  let rev = 0
  
  while(x>0){
    rem = x%10
    rev = (10*rev) + rem
    x = Math.floor(x/10)
  }
let limit = Math.pow(2,31)
if(rev<-limit || rev>limit){
  return 0;
}

  return (xcopy<0)? -rev:rev
};
// --- Auto Review (DSA) ---
// DSA Review (Bit Manipulation)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Count set bits; Brian Kernighan vs. builtin.
// Medium: Reverse bits and why sign matters in JS.
// Hard: Find two unique numbers where others twice—derive.
