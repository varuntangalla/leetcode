let arr = [2,2,2,3,3]

function findLucky(arr){    
    const myMap = new Map(); 
    const result = [];

    for(let i=0;i<arr.length;i++){
        if (!myMap.has(arr[i])) {
            myMap.set(arr[i], 1);
        } else {
            myMap.set(arr[i], myMap.get(arr[i]) + 1);
        }
    }
    for (const [key, value] of myMap) {
        // Check if the key and value are the same
        if (key === value) {
            result.push(value);
        }
    }

    result.sort((a, b) => b - a);
    return result.length > 0 ? result[0] : -1;
}

console.log(findLucky(arr));