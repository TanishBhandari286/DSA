function Largest_Sum(arr){
    let smallest = arr[0]
    // let largest = -Infinity
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>largest) largest = arr[i]
    }
    return largest
}

let arr = [2,3,4,5,,-6,6,7]

console.log(Largest_Sum(arr));

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth), iterative loop(s) present (baseline O(n))
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth), iterative loop(s) present (baseline O(n))
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.
