nums = [1,3,4,2,2]

function findDuplicate(nums){
    const seen = new Set(); // Initialize an empty set
    
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) { // If the number is already in the set
            return nums[i]; // Return the duplicate
        }
        seen.add(nums[i]); // Add the number to the set
    }
}

console.log(findDuplicate(nums));