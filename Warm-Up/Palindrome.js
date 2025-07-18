// Leetcode


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rem = 0;
    let rev = 0;

    let xcopy = x

    while(x>0){
        rem = x%10;
        rev = (10*rev) + rem
        x = Math.floor(x/10)


    }
    if(rev==xcopy){
        return true
    }else{
        return false
    }
    // return === xcopy

};
