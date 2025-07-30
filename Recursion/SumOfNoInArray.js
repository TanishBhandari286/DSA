let arr = [1, 2, 3, 4, 5];
let total = 0;
function arrCount(arr, x = 0) {
  if (x == arr.length) {
    return 0;
  }
  total = total + arr[x];
  x = x + 1;
  arrCount(arr, x);
  return total;
}

console.log(arrCount(arr));
