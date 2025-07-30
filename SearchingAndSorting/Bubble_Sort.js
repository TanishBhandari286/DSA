let arr = [9, 8, 6, 4, 12, 5, 1, 2];
function bubSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let didswap = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didswap = true
      }
    }
      if(!didswap) break;
  }
  return arr;
}
console.log(bubSort(arr, 8));
