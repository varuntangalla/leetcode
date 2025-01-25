let nums = [1,1,1,1,1];


function sumOfUnique(nums){

    const hashMap = {}; 
    let sum=0;

    for(let i=0;i<nums.length;i++){
        if(hashMap[nums[i]] == undefined){
            hashMap[nums[i]] = 1; 
        }
        else {
            hashMap[nums[i]]++;
        }
    }

    for (const [key, value] of Object.entries(hashMap)) {
        if (value === 1) {
            sum += Number(key);
        }
    }
    return sum;

}

console.log(sumOfUnique(nums));
