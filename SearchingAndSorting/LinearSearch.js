let arr = [2, 3, 4, 5, 6];

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true,i;
    }
  }

  return -1;
}

console.log(LinearSearch(arr, 3));
