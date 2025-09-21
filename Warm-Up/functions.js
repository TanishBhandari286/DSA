function printHello() {
  console.log("Hello world");
}

printHello();

function sum(a, b) {
  console.log(a + b);
}

sum(7, 10);

function voteEligibility(age) {
  if (age >= 18) console.log("Eligible ");
  else console.log("Not eligible");
}
let age = 17;
voteEligibility(age);

function evenodd(num) {
  if (num % 2 == 0) console.log("Even No");
  else console.log("odd num");
}
evenodd(19);

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.
