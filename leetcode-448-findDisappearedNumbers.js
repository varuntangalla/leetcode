nums = [4,3,2,7,8,2,3,1];

// function findDisappearedNumbers(nums) {
//     const mySet = new Set();

//     for(let i=1;i<=nums.length;i++){
//         if(!nums.includes(i)){
//             mySet.add(i);
//         }
//     }   

//     return Array.from(mySet);
// }

function findDisappearedNumbers(nums) {
    let n = nums.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] = -nums[num - 1];
        }
    }

    // Step 2: Collect the numbers that are not marked (positive indices)
    
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}


console.log(findDisappearedNumbers(nums));