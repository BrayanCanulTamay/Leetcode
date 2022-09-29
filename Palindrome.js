var isPalindrome = function(number) {
    
    if (number<0 || number%10 === 0 && number !== 0){
        return false
    }
    let reverse = 0;
    let num = number;
    while(num > reverse){
           reverse = num%10 + reverse*10;
        num = parseInt(num/10);
          }
    return  (num === reverse || num === parseInt(reverse/10));
};
console.log(isPalindrome);