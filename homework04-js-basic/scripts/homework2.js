let numberArray = [1,24,36,5,88];
let sum = 0;

function sumCalculator(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const result = sumCalculator(numberArray);
console.log(result);