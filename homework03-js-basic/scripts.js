
// Excercise 1

function typeVariant(input) {
    const result = typeof input;
    console.log(result);
}

typeVariant(null);
typeVariant(true);
typeVariant(10);
typeVariant('Dejan');
typeVariant();

// Excercise 2

function calculateAge(age,conversionType) {
    if (Number.isNaN(age)){
        return 'Invalid input'
    }
    if (conversionType !== "h2d" && conversionType !== "d2h") {
        return 'Invalid input'
    }
    if (conversionType === "h2d") {
        const result = age * 7;
        console.log(result);
       // return result; 
    } else {
        const result = age / 7;
        console.log(result);
       // return result;
    }
}

const convertedAge = calculateAge(15,'h2d');

//Прво ја решив со prompt, ама приметив дека се бара со console, па еве ја на двата начина (:

//const ageInput = Number(prompt("Please enter age:"));
//const conversionTypeInput = prompt("Enter H2D or D2H").toLowerCase();

//const convertedAge = calculateAge(ageInput, conversionTypeInput);
//console.log(convertedAge);


//Excercise 3

function atm(balance,withdrawl) {
    if (Number.isNaN(balance)) {
        return 'Invalid input';
    }
    if (Number.isNaN(withdrawl)) {
        return 'Invalid input';
    }
    if (balance < withdrawl) {
        return 'Not enough money.';
    }
    const result = balance - withdrawl;
    return result;
}

const balanceInpuit = Number(prompt("Enter your balance:"));
const withdrawlInput = Number(prompt("Enter the ammount of money you would like to withdraw:"));

const moneyRemaining = atm (balanceInpuit,withdrawlInput);
console.log(`You have withdrawn ${withdrawlInput}$ from your account, and now you have ${moneyRemaining}$ left on your account.`);
