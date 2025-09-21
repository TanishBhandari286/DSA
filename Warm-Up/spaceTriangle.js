let n = 5

for(let i = 1;i<=n;i++){
    let row = ""

    for(let j = 0 ; j<(n-i);j++){
        row = row + " "
        
    }

    // for(let k = (n-i); k<n;k++){
    //     row = row + "*"
    //     console.log(row);
        
    // }
    for (let k = 0; k<i;k++){
        row = row + "*"
    }
    console.log(row);
    
}



// for (let i = 0 ; i<n;i++){
//     let row = " "
//     for(let j = 0; j<n-(i+1);j++){
//         row = row + " "
//     }

//     for(let k = 0 ; k<(i+1);k++){
//         row = row + " * "
//     }
//     console.log(row);
    
// }
// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.
