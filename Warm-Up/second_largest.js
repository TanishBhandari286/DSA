// #1st approach

// function Second_Largest(arr){
//     let largest = arr[0]
//     let seclar = arr[0]

//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>seclar&&arr[i]!=largest){
//             seclar = arr[i]
//         }
//     } 
//     return seclar

// }

// let arr = [2,3,4,5,90,-4,-9]
// console.log(Second_Largest(arr));

// #2nd approach

let largest = -Infinity
let slargest = -Infinity

let arr = [4,9,0,2,8,7,1]
for(let i = 0; i<arr.length;i++){
if(arr.length<2){
    console.log(null);
    break
    
}
    if(arr[i]>largest){
        slargest = largest
        largest = arr[i]
    }
    else if(arr[i]<largest&&arr[i]>slargest){
        slargest = arr[i]
    }
}
console.log(slargest);


