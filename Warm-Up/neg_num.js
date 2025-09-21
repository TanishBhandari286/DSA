function negnumcount(arr){

    let count = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i]<0){
count++
    }
}
return count
}

let arr = [2,3,-4,-5,-6]
console.log(negnumcount(arr));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.
