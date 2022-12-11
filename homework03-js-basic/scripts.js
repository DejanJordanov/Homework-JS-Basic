
// Excercise 1

function typeVariant(input) {
    const result = typeof input;
    return result;
}

const typeString = typeVariant("Dejan");
console.log(typeString);

const typeNumber = typeVariant(26);
console.log(typeNumber);

const typeBoolean = typeVariant(20>15);
console.log(typeBoolean);

const typeObject = typeVariant(null);
console.log(typeObject);

const typeUndefined = typeVariant();
console.log(typeUndefined);


// Excercise 2

function calculateAge(ageHuman,ageDog) {
    const ageInDogYears = ageHuman * 7;
    return ageInDogYears;
}

const dogYears = calculateAge(3);
console.log(dogYears);

//unfinished

//Excercise 3

function atm(balance,withdrawal) {
    if (withdrawal>balance) {
        return 'Not enough funds'
    }
     const moneyLeft = balance - withdrawal;
     return `You withdrew ${withdrawal}$, and now your balance is ${moneyLeft}$.`
}
const bankAccount = atm (1650,650);
console.log(bankAccount);
