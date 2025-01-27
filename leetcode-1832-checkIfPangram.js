let sentence = "leetcode";

function checkIfPangram(sentence) {
    const mySet = new Set();

    for(let i=0;i<sentence.length;i++){
        if(!mySet.has(sentence[i])){
            mySet.add(sentence[i])
        }
    }

    return mySet.size == 26;
}

console.log(checkIfPangram(sentence));