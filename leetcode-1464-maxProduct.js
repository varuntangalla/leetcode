let nums = [1,5,4,5]; 


function maxProduct(nums){
    let product = 0;

    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){ 
            product = Math.max(product,(nums[i]-1)*(nums[j]-1));
        }
    }
    return product;
}

console.log(maxProduct(nums));