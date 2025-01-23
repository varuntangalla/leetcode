let nums = [2,2,3,2];

function singleNumber(nums){
    const hashMap = {}; 

    for(let i=0;i<nums.length;i++){
        
        if(hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = 1; 
        }
        else {
            hashMap[nums[i]]++;
        }
    }
    return parseInt(Object.keys(hashMap).find((key) => hashMap[key] === 1));
}

console.log(singleNumber(nums));