let x = 1534236469; 

function reverseInteger(x){
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648;
    let temp = 0;
    let output = 0; 
    let isNegative = x < 0;
    x = Math.abs(x);

    while(x != 0){
      temp = x%10; 
      x = Math.floor(x/10);
      if (output > Math.floor(INT_MAX / 10) || (output === Math.floor(INT_MAX / 10) && temp > 7)) {
        return 0; // Overflow case
      }
      if (output < Math.ceil(INT_MIN / 10) || (output === Math.ceil(INT_MIN / 10) && temp < -8)) {
        return 0; // Underflow case
      }  
      output = (output* 10) + temp;
    }

    return isNegative ? -output : output;
}

console.log(reverseInteger(x));