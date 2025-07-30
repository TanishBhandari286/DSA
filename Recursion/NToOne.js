let num = 19;
function fun(num) {
  if (num == 0) {
    return;
  }

  console.log(num);

  num -= 1;

  fun(num);
}
console.log(fun(num));
