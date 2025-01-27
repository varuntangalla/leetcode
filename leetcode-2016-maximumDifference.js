let nums =[9,4,3,2];

function maximumDifference(nums){

    let maximumDifference = -1;

    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] < nums[j]){
                maximumDifference = Math.max(maximumDifference, nums[j] - nums[i]);
            }
        }
    }

    return maximumDifference;
}


console.log(maximumDifference(nums));