const phonePrice = 119.95;

const numberOfPhones = prompt("Enter the number of phones:");

const convertedNumberOfPhones = Number(numberOfPhones);

const tax = phonePrice * 0.05;

const totalPrice = (phonePrice + tax) * convertedNumberOfPhones;

console.log("The total price of",convertedNumberOfPhones,"phones is:",totalPrice,"$");