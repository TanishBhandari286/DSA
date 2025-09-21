let arr = [9, 8, 6, 4, 12, 5, 1, 2];

function SelSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(SelSort(arr, 8));

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: uses recursion (watch stack depth), has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: uses recursion (watch stack depth), has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: uses recursion (watch stack depth), has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.
