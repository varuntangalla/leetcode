let nums = [-1,0];

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
    return Object.keys(hashMap).filter((key) => hashMap[key] === 1).map((key) => Number(key));
}

console.log(singleNumber(nums));