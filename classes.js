// objects
const person = { 
    name: 'jjj',
    age: 20
};

console.log(typeof person); 

const person1 = { 
    name: 'nnnn', 
    age: 20, 
};

console.log(person1.name);

const person0 = { 
    name: 'kkkkk', 
    age: 20, 
};

console.log(person0["name"]); 

const student = { 
    name: 'aaaaaa', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

console.log(student.marks);
console.log(student.marks.science);

const person2 = {
    name: 'Sam',
    age: 30,
    greet: function() { console.log('hello') }
}

person2.greet(); 

const person3 = {
    name: 'pppp',
    greet: function() { console.log('hello'); }
};

person3.name; 
person3.greet(); 

let number = '23.32';
let result = parseInt(number);

console.log(result); 


const person7 = {
    name: 'yyy',
    age: 30,

    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person7.greet();

const school = new Object();
school.name = 'abc school';
school.location = 'pune';
school.established = 1971;

school.displayInfo = function(){
	console.log(`${school.name} was established
		in ${school.established} at ${school.location}`);
}

school.displayInfo();

class Person {
    constructor(name) {
      this.name = name;
    }
}
  
  const person4 = new Person('aaaaa');
  const person5 = new Person('bbbbb');
  
  console.log(person4.name); 
  console.log(person5.name); 


function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));


const number0 = prompt("Enter a number: ");
if (number0 > 0) {
    console.log("The number is positive");
}

else if (number0 == 0) {
  console.log("The number is 0");
}

else {
    console.log("The number is negative");
}

console.log("understanding easy");

const number1 = prompt("Enter a number: ");

if (number1 >= 0) {
    if (number1 == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}

const number2 = 2;
if (number2 > 0) {
    console.log("The number is positive.");
} else {
   console.log("The number is negative or zero.");
}

let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);


let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; 
  default:
    console.log('default')
    
  case 1:
    console.log('1');
}

for (let i = 1; i <= 5; i++) {
     
    if (i == 3) {
        break;
    }
    console.log(i);
}