let num = 526; 


function isSameAfterReversals(num){

    let temp =0; 
    let output =0; 
    let reverseTemp =0;
    let reverseNum =0;
    let storeOutput = num;

    while(num > 0){
        temp = num%10;
        output = output*10 + temp;
        num = Math.floor(num/10);
    }
   
    while(output > 0){
        reverseTemp = output%10;
        reverseNum = reverseNum*10 + reverseTemp;
        output = Math.floor(output/10);
    }

    return storeOutput == reverseNum;
}

console.log(isSameAfterReversals(num));