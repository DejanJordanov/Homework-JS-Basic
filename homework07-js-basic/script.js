//Excercise 1

var student = {
  name: "Dejan",
  lastName: "Jordanov",
  age: 26,
  country: "Macedonia",
};

function printElements(object) {
  return `${object.name} ${object.lastName} ${object.age} ${object.country}`;
}

const output = printElements(student);
console.log(output);

//Excercise 2

function deleteProperty(object) {
  delete object.age;
  return object;
}

const deletion = deleteProperty(student);
console.log(deletion);

//Excercise 3

function check(object, property) {
  console.log(object.hasOwnProperty(property));
}

check(student, `lastName`);

//Excercise 4

let car = {
  model: "Toyota",
  color: "Red",
  year: 2018,
  fuelConsumption: 6.9,
  kilometres: function (distanceInKilometres) {
    return (this.fuelConsumption * distanceInKilometres) / 100;
  },
};

console.log(car.kilometres(150));
