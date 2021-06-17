function addit (n1, n2) {
   console.log(n1+n2);
   return(n1 +n2)
};

let num1 = 2;
let num2 = 4;


document.querySelector('#output').innerHTML = addit(num1, num2);


//Events
//const buttonElement = document.getElementById('submitButton');

// function copyInput(event) {
//     console.log(event);
//     const inputElement = document.getElementById('inputBox');
//     const outputElement = document.getElementById('output');
//     outputElement.innerHTML = inputElement.value;
// }
// buttonElement.addEventListener('click', copyInput);

//Regular Function Syntax

const buttonElement = document.getElementById('submitButton');

function addTwo() {
    const inputElement = document.getElementById('inputBox');
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = Number(inputElement.value) + 2;
}
buttonElement.addEventListener('click', addTwo);
 
// Same Function with function expression

//const buttonElement = document.getElementById('submitButton');

// let addTwo = function() {
//    const inputElement = document.getElementById('inputBox');
//    const outputElement = document.getElementById('output');
//    outputElement.innerHTML = Number(inputElement.value) + 2;
// }

//buttonElement.addEventListener('click', addTwo);

//Same Function with Arrow syntax

//const buttonElement = document.getElementById('submitButton');

// let addTwo = () => {
//    const inputElement = document.getElementById('inputBox');
//    const outputElement = document.getElementById('output');
//    outputElement.innerHTML = Number(inputElement.value) + 2;
// }

//buttonElement.addEventListener('click', addTwo);


//Arrays with methods

// example 1
// const steps = ['one', 'two', 'three'];
// // callback declaration
// function makeList(item) {
//   const listElement = document.getElementById('myList');
//   listElement.innerHTML += `<li>${item}</li>`; // '<li>' + item + '</li>'
// }
// steps.forEach(makeList);

// // example 2
// // is the luckyNumber in the list?
// const myArray = [12, 34, 21, 54];
// const luckyNumber = 21;
// let luckyIndex = -1;
// myArray.forEach(function(item, index) {
//   if(item === luckyNumber) {
//     luckyIndex = index;
//     console.log(luckyIndex);
//   }
// });

//MAP Method chage each item in the array, return array not modify

// example 1
const steps = ['one', 'two', 'three'];
const stepsHtml = steps.map(function(item) {
  return `<li>${item}</li>`;
});
document.getElementById('myList').innerHTML = stepsHtml.join();

// example 2
const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
  let points = 0;
  if(grade === 'A') {
    points = 4;
  } else if (grade === 'B') {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

//Filter, Return new aray acording to a condition

let nums = [1, 2, 3, 4];
document.querySelector('#output').textContent = nums;

function getEvents(num){
   if (num % 2 === 0){
      return num;
   }
}

let evens = nums.filter(getEvents);
document.querySelector('#output').textContent = evens;