let n = 20;
function numprint(x) {

  if(x>n){
    return
  }
console.log(x);
numprint(++x)
  
}
console.log(numprint(1));
