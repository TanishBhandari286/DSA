/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  if (s.length == 0) {
    return s;
  }
  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
};

// --- Auto Review (DSA) ---
// DSA Review (General DSA)
// Complexity hints: no obvious hotspots detected
// Easy: Time/space complexity of the main routine{fn_label}.
// Medium: Refactor for readability: name helpers, reduce nesting.
// Hard: Edge-case audit: empty inputs, large n, negative/zero values.

// --- Auto Review (DSA) ---
// DSA Review (General DSA)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Time/space complexity of the main routine{fn_label}.
// Medium: Refactor for readability: name helpers, reduce nesting.
// Hard: Edge-case audit: empty inputs, large n, negative/zero values.
