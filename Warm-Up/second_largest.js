// #1st approach

// function Second_Largest(arr){
//     let largest = arr[0]
//     let seclar = arr[0]

//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>seclar&&arr[i]!=largest){
//             seclar = arr[i]
//         }
//     } 
//     return seclar

// }

// let arr = [2,3,4,5,90,-4,-9]
// console.log(Second_Largest(arr));

// #2nd approach

let largest = -Infinity
let slargest = -Infinity

let arr = [4,9,0,2,8,7,1]
for(let i = 0; i<arr.length;i++){
if(arr.length<2){
    console.log(null);
    break
    
}
    if(arr[i]>largest){
        slargest = largest
        largest = arr[i]
    }
    else if(arr[i]<largest&&arr[i]>slargest){
        slargest = arr[i]
    }
}
console.log(slargest);



// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth), has nested loops (likely O(n^2) or worse)
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth), has nested loops (likely O(n^2) or worse)
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth), has nested loops (likely O(n^2) or worse)
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.
