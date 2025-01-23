let s = "aab" 

function lengthOfLongestSubstring(s){

    let apointer = 0; 
    let bpointer = 0; 
    let max = 0; 

    const letters = new Set();

    while(bpointer < s.length){
        if(!letters.has(s[bpointer])){
            letters.add(s[bpointer]);
            bpointer++;
            max = Math.max(letters.size, max);
        }  
        else{ 
            letters.delete(s[apointer]); 
            apointer++;
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring(s)); 