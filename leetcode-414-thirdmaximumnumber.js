let nums = [1]; 

function thirdMax(nums){
    nums.sort((a,b) => a - b);
    let mySet = new Set();

    for(let i=0;i<nums.length;i++){
        if(!mySet.has(nums[i])){
            mySet.add(nums[i]);
        }
    }
    console.log("set size: ", mySet.size);

    if(mySet.size >= 3){
        return Array.from(mySet)[2];
    } else if (mySet.size = 2) {
        return Array.from(mySet)[1];
    }
}

console.log(thirdMax(nums)); 