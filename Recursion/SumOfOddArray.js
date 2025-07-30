let arr = [2, 3, 4, 5];
let total = 0;
function sumOdd(arr, index = 0) {
  if (index == arr.length) {
    return 0;
  }

  if (arr[index] % 2 !== 0) {
    total = total + arr[index];
  }
  index = index + 1;

  sumOdd(arr, index);
  return total;
}

console.log(sumOdd(arr));
