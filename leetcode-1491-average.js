let salary = [4000,3000,1000,2000]


function average(salary){
    let average=0;
    number= salary.length-2;
    salary.sort((a,b)=> a-b); 

    for(let i=1;i<salary.length-1;i++){
        average = average+salary[i];
        console.log("average: ", average);
    }
    average = average/number;

    return average; 
}

console.log(average(salary));