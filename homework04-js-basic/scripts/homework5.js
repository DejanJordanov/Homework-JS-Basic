let array = [5,2,10,15,7,16,3,12,10];
function minMaxCalculator (numberArray) {
let min = numberArray[0];
let max = numberArray[0];
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
if (numberArray[i] <= min) {
    min = numberArray[i];
}
if (numberArray[i] >= max) {
    max = numberArray[i];
}
    sum += numberArray[i];
}
console.log(`Min:${min},Max:${max},Sum:${sum}.`);
}

minMaxCalculator(array);

