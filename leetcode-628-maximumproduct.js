let nums = [-1,-2,-3];


function maximumProduct(nums){

    let n = nums.length;
    nums.sort((a,b) => a - b);

    let last3 = nums[n-1]*nums[n-2]*nums[n-3];

    let first3 = nums[0]*nums[1]*nums[n-1];


    return Math.max(first3,last3);
}

console.log(maximumProduct(nums));