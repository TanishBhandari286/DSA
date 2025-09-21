let n = 4

for(let i = 0; i<n;i++){
    let row = " "
    for(let j = 0; j<=i;j++){    
        row = row + (j+1)
    }
    console.log(row);
}
// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.
