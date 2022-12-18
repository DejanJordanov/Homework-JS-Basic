let stringArray = ['Hello','trainers','of','SEDC','!'];

function sentenceGenerator(array) {
    return `${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]}`;
}

const sentence = sentenceGenerator(stringArray);
console.log(sentence);