function negnumcount(arr){

    let count = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i]<0){
count++
    }
}
return count
}

let arr = [2,3,-4,-5,-6]
console.log(negnumcount(arr));
