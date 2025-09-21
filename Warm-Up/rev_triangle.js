let n = 5;

for(let i = 0; i<n;i++){
    let row = " "
    let a = 1;
    for(let j = 0 ; j<(n-i);j++){
        row = row + (j+1)
    }
    console.log(row);
    
}



// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: has nested loops (likely O(n^2) or worse)
// Easy: Move zeros to the end in-place while keeping order.
// Medium: Container With Most Water: why pointers meet-in-the-middle works.
// Hard: Trap Rain Water in O(n) with two pointers; derive left/right max logic.
