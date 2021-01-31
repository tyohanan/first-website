///data type
/*
const name = "john";
const age = 30;
const rating = 4.5;
const isCool = true;

let z;

//debugging with console.log

console.log(typeof name);
console.log("my name is " + name + " and i am " + age);

const hello = "HELLO my devil, technology, and so one";
console.log(hello.length);
console.log(hello.toLowerCase());
console.log(hello.toUpperCase());
console.log(hello.toString());
console.log(hello.trim());
console.log(hello.valueOf());

console.log(hello.split(""));
console.log(hello.split(","));

console.log(hello.substring(0, 5));
console.log(hello.substring(5, 10).toUpperCase());

//arrays

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(numbers);

const fruit = [numbers, "nice and easy", 25, isCool];
console.log(fruit);
console.log(fruit[0]);

fruit.push("mangos");
console.log(fruit);
fruit.pop();
console.log(fruit);

const project = {
  firstname: "john",
  lastnime: "doe",
  age: 30,
  hobbies: ["music", "movie", "sports"],
  address: {
    street: "50 mainstrett",
    city: "boston",
    state: "nice",
  },
};

console.log(project.address.street);
console.log(project.hobbies[0]);

//array object

const todos = [
  {
    id: 1,
    text: "take it all out",
    isComplete: true,
  },
  {
    id: 2,
    text: "nice and warm",
    isComplete: false,
  },
  {
    id: 3,
    text: "must be nice to have sometime alone",
    isComplete: true,
  },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

for (let todo of todos) {
  console.log(todo.text);
}

//while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
  return todo.isComplete == true;
});

console.log(todoCompleted);

//conditional
// with == (equal two) same value different data type is true
// with === (equal three) same value same data type is true

const x = 10;
const y = 20;

if (x == 10) {
  console.log("x is 10");
} else {
  console.log("bastard");
}

if (x > 5 || y < 10) {
  console.log("YESS");
}

//switch case
const test = 1;
const color = test > 10 ? "red" : "blue";

console.log(color);

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
  default:
    console.log("there is no color");
    break;
}

//function---------------------------

function adding(addNum1, addNum2) {
  return addNum1 + addNum2;
}

console.log(adding(5, 10000000));
//hypeennn--------------------
todos.forEach((todo) => console.log(todo));

//constructor function-------------------------------------------------

function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};



//classs-----------------------------------------------------------------
class person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//isntantiate------------------------------------------
const person1 = new person("elga", "hanan", "1-1-19999");
const person2 = new person("budi", "doremi", "5-5-1999");
console.log(person1);
console.log(person2.getBirthYear());
console.log(person1.getFullName());

*/

//single element
const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".boxName"));

//multiple element
console.log(document.querySelectorAll(".item"));
