let arr = [1,2,2,1,1,3];


function uniqueOccurrences(arr){    

    const myMap = new Map(); 

    for(let i=0;i<arr.length;i++){
        if (!myMap.has(arr[i])) {
            myMap.set(arr[i], 1);
        } else {
            myMap.set(arr[i], myMap.get(arr[i]) + 1);
        }
    }

    const values = Array.from(myMap.values());
    const uniqueValues = new Set(values);
    return uniqueValues.size == values.length;
}

console.log(uniqueOccurrences(arr));