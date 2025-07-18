function Largest_Sum(arr){
    let smallest = arr[0]
    // let largest = -Infinity
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>largest) largest = arr[i]
    }
    return largest
}

let arr = [2,3,4,5,,-6,6,7]

console.log(Largest_Sum(arr));
