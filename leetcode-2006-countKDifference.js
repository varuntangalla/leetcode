let nums = [3,2,1,5,4];
let k = 2;

function countKDifference(nums,k){
    
    let count = 0;

    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
        if(Math.abs(nums[i] - nums[j]) === k){
            count++;
        }
    }
}
return count;

}

console.log(countKDifference(nums,k))