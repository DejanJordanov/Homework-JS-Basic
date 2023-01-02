let myList = document.getElementById("myDiv");
let array = [1, 4, 3, 7];

function printNumbers(someArray, element) {
  element.innerHTML = "";
  element.innerHTML += `<ul id="listItems"></ul>`;
  let list = document.getElementById("listItems");
  list.innerHTML = "";
  for (let i = 0; i < someArray.length; i++) {
    list.innerHTML += `<li>${someArray[i]}</li>`;
  }
}

function sumNumbers(sumArray, element) {
  element.innerHTML += `<h2 id="sum"><h2>`;
  let result = document.getElementById("sum");
  sumResult = 0;
  for (let i = 0; i < sumArray.length; i++) {
    sumResult += sumArray[i];
  }
  result.innerHTML = sumResult;

  element.innerHTML += `<h4 id="equasion"></h4>`;
  let equasion = document.getElementById("equasion");
  equasion.innerHTML = `${sumArray[0]}+${sumArray[1]}+${sumArray[2]}+${sumArray[3]}=${sumResult}`; //not the best way, but yeah
}

printNumbers(array, myList);
sumNumbers(array, myList);
