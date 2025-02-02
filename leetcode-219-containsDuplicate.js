let nums = [1,2,3]; 

function containsDuplicate(nums){

    const mySet = new Set();

    for(let i=0;i<nums.length;i++){

        if(mySet.has(nums[i])){
            return true;
        }
        mySet.add(nums[i]);
    }
    return false;
}

console.log(containsDuplicate(nums));