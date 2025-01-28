let nums = [5,20,66,1314]


function maximumCount(nums){
        let evenCount =0; 
        let oddCount =0; 

        for(let i=0;i<nums.length;i++){
            if(nums[i] > 0){
                evenCount++;
            }
            else if(nums[i] < 0) {
                oddCount++;
            }
        }
        return evenCount > oddCount ? evenCount : oddCount;
}

console.log(maximumCount(nums));