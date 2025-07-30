let arr = [9, 8, 6, 4, 12, 5, 1, 2];

function InsertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

console.log(InsertionSort(arr, 8));
