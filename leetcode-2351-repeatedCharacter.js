let s = "abcdd"


function repeatedCharacter(){
    const mySet = new Set();

    for(let i=0;i<s.length;i++){
        if(!mySet.has(s[i])){
            mySet.add(s[i]);
        }
        else {
            return s[i];
        }
    }
}


console.log(repeatedCharacter(s));
