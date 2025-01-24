var nums = [1,0,1,1,0,1]; 

function findMaxConsecutiveOnes(nums){

    let result = 0;
    let count =0;

    for(let i=0;i<nums.length;i++){

        if(nums[i] == 1){
            count++;
            result = Math.max(result,count);
        }
        else {
            count = 0;
        }
    }

    return result;
}

console.log(findMaxConsecutiveOnes(nums));