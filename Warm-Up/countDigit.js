function CountDigit(num){
    let count = 0;
    num = Math.abs(num)// handling -ve numbers by converting them
    while(num > 0){
        if(num==0){
            return 1
        }
        num = Math.floor(num/10);// avoid floating point 
        count++;
    }
    return count;
}

console.log(CountDigit(259));
