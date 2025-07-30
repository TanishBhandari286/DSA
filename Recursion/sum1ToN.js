let n = 5;
let total = 0;
function sum(x) {
  if (x > n) {
    return;
  }
  total = total + x;
  sum(++x);
  return total;
}

console.log(sum(1));
