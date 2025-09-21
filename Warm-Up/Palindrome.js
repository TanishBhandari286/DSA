// Leetcode


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rem = 0;
    let rev = 0;

    let xcopy = x

    while(x>0){
        rem = x%10;
        rev = (10*rev) + rem
        x = Math.floor(x/10)


    }
    if(rev==xcopy){
        return true
    }else{
        return false
    }
    // return === xcopy

};

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: no obvious hotspots detected
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: no obvious hotspots detected
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: no obvious hotspots detected
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.
