numberArray = [1,5,4,9,8,7,4,6,3,2,5,8,4,1,2,5,7];

function findNumber(array, type){
    let result = [];
    if(type === "even"){
       for (let num of array) {
           if(num % 2 === 0){
               result.push(num);
           }
       } 
       return result;
    } else if(type === "odd"){
        for (let num of array) {
            if(num % 2 !== 0){
                result.push(num);
            }
        } 
        return result;
    } else {
        return ("Please enter the correct type!");

    }
}

const result = findNumber(numberArray,'even');
console.log(result);