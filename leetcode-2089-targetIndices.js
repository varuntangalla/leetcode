let nums = [1,2,5,2,3]; 
let target = 2;


function targetIndices(nums,target){
    const outputArray = [];
    nums.sort((a,b) => a-b); 

    for(let i=0;i<nums.length;i++){
        if(nums[i] == target){
            outputArray.push(i);
        }
    }
    return outputArray;
}


console.log(targetIndices(nums,target));