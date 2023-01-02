
let myParagraphOne = document.getElementsByClassName("paragraph")[0];
let myParagraphTwo = document.getElementsByClassName("paragraph")[1];

myParagraphOne.innerText = 'First one, changed';
myParagraphTwo.innerText = 'Second one, changed';

let firstHeading = document.getElementById('myTitle');
let secondHeading = document.getElementsByTagName('h1')[1];
let thirdHeading = document.getElementsByTagName('h3')[0];
firstHeading.innerText = 'Changed title';
secondHeading.innerText = 'Changed h1 tag';
thirdHeading.innerText = 'Changed h3 tag';