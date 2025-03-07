// Task 2: 
let radius = 7;
const pi = 3.14;
let area = pi * radius ** 2;
console.log(`The area of a circle with radius ${radius} is ${area}`);

// Task 3: 
let name = "Bob";
let age = 24;

console.log(typeof name);
console.log(typeof age);

console.log(`Hello! My name is ${name}, and I'm ${age} years old.`);
console.log(`I was born in ${2024 - age}`);

// Task 4.1: 
console.log('1' == 1); 
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if ("false") {
  console.log("Hello false!");
}

// Task 4.2: 
console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

// Task 4.3: 
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// Task 5: 
function happyPrint(message) {
  console.log("😀: " + message);
}

function sadPrint(message) {
  console.log("😢: " + message);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

// Task 2:
function printDate() {
  console.log(new Date().toLocaleTimeString());
}

setInterval(printDate, 1000);

// Task 6: 
function createPerson(name, height, weight) {
  return { name, height, weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let totalBMI = 0;
  for (let person of people) {
    totalBMI += calcBMI(person.weight, person.height);
  }
  return totalBMI / people.length;
}

let people = [
  createPerson("Sally", 2.5, 60),
  createPerson("Ben", 3, 81),
  createPerson("Shelly", 1.7, 50),
];

console.log("Average BMI:", avgBMI(people));
