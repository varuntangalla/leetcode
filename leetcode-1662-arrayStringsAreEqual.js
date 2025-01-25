let word1 = ["ab", "c"]; 
let word2 = ["a", "bc"];


function arrayStringsAreEqual(word1,word2){

    let firstWord=""; 
    let secondWord=""; 

    for(let i=0;i<word1.length;i++)
    {
        firstWord = firstWord + word1[i];
    }

    for(let i=0;i<word2.length;i++)
    {
        secondWord = secondWord + word2[i];
    }

    return firstWord === secondWord;
}

console.log(arrayStringsAreEqual(word1,word2));