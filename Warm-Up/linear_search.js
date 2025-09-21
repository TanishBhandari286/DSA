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
