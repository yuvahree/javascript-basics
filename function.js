const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"kkkkk",
    lastName: "lllll"
  }
  
  person.fullName.call(person1, "pune", "china");
  
  console.log(person1,"pune","china");

  function greet() {
    console.log("Hello there");
}
greet();

function greet(name) {
    console.log("Hello " + name + ":)");
}
let name = ("yyyyy ");

greet(name);

function add(a, b) {
    console.log(a + b);
}

add(3,4);
add(2,9);

function add(a, b) {
    return a + b;
}
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

let result = add(number1,number2);

console.log("The sum is " + result);

let x = function (num) { return num * num };
console.log(x(4));

let y = x(3);
console.log(y);

//call function

function sum(a, b) {
    return a + b;
  }
  
  var result0 = sum.call(this, 5, 10);
  
  console.log(result0);

function sum(a, b) {
    return a + b;
  }
  let result1 = sum.call(this, 5, 3);
  
  console.log(result1);

const human = {
    firstName: "xxxxx",
    lastName: "yyyyy",
    age: 26,
  };
  
  function greet() {
    const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    console.log(string);
  }
  
  greet.call(human);

function Animal(name, age) {
    this.name = name;
    this.age = age;
  }
  
  function Horse(name, age) {
    Animal.call(this, name, age);
    this.sound = "Neigh";
  }
  
  function Snake(name, age) {
    Animal.call(this, name, age);
    this.sound = "Hiss";
  }
  
  const snake1 = new Snake("aaaaa", 15);
  console.log(snake1.name, snake1.age, snake1.sound);
  
  const horse1 = new Horse("bbbbb", 48);
  console.log(horse1.name, horse1.age, horse1.sound);

//bind method

const student1 = {
    name: "ppppp",
    grade: "8",
    introduction: function () {
      console.log(this.name + "studies in grade" + this.grade + ".");
    },
  };
  
  const student2 = {
    name: "aaaaaa ",
    grade: " 6",
  };
  
  let result3= student1.introduction.bind(student2);
  result3(); 

const student4 = {
    name: "aaaa",
    introduction: function (score) {
      console.log(this.name + "scored " + score + " in an exam.");
    },
  };
  
  const student5 = {
    name: "bbbbb ",
  };
  let result4 = student1.introduction.bind(student2, 95);
  
  result4(); 

  // apply
const personName = {
    firstName: "xxxxx",
    lastName: "yyyyy",
  };
  function greet(wish, message) {
    return `${this.firstName}, ${wish}. ${message}`;
  }
  let result5 = greet.apply(personName, ["Good morning", "How are you?"]);
  
  console.log(result5);

  let color1 = ["Red", "Green", "Blue"];
let color2 = ["Yellow", "Black"];

color1.push.apply(color1, color2);

console.log(color1);

const numbers = [5, 1, 4, 3, 4, 6, 8];
let max = Math.max.apply(null, numbers);

console.log(max); 

let max1 = Math.max(5, 1, 4, 3, 4, 6, 8);

console.log(max1); 