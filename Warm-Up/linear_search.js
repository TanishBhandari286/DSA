function LinearSearch(arr,target){
    for(let i = 0; i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
return -1
}

let arr = [2,3,4,5,6,7,8]
let target = 2;
console.log(LinearSearch(arr,target))
// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: uses recursion (watch stack depth), iterative loop(s) present (baseline O(n))
// Easy: Move zeros to the end in-place while keeping order.
// Medium: Container With Most Water: why pointers meet-in-the-middle works.
// Hard: Trap Rain Water in O(n) with two pointers; derive left/right max logic.

// --- Auto Review (DSA) ---
// DSA Review (Binary Search)
// Complexity hints: uses recursion (watch stack depth), iterative loop(s) present (baseline O(n))
// Easy: Given a sorted array with duplicates, find first and last occurrence of a target.
// Medium: Peak element in a mountain array. Why two pointers won't work as cleanly?
// Hard: K-th smallest pair distance using BS on answer; justify monotonic predicate.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth), iterative loop(s) present (baseline O(n))
// Easy: Detect and remove cycle (Floyd) and find cycle start.
// Medium: Merge two sorted lists; iterative vs. recursive tradeoffs.
// Hard: LRU cache with list+hash; operations and complexity.
