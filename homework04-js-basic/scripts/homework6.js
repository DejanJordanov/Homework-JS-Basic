let firstNamesArray = ["Dejan","Mario","Jovan","Bojan","Ivan",];
let lastNamesArray = ["Jordanov","Metodievski","Magdevski","Damchevski","Lazarevski",];

function fullNames (nameArray,surnameArray) {
    for ( let i = 0; i < nameArray.length; i++) {
        result = `${i + 1}. ${nameArray[i]} ${surnameArray[i]}`
        console.log(result);
    }

}

fullNames (firstNamesArray, lastNamesArray);