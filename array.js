let companyList = ["ajio", "flipkart", "yntraa", "Amazon"];
console.log(companyList.length); 

let randomList = ["JavaScript", 44];
console.log(randomList.length); 

let emptyArray = [];
console.log(emptyArray.length); 

let languages = ["Js", "Python", "C", "ruby", "Lua"];
for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

let city = ["hillls", "ooty", "pune"];
city.push("London");

console.log(city);

let languages1 = ["Java", "js", "c", "Lua"];
let count = languages1.push("C++");

console.log(languages1); 
console.log(count); 

let cities = ["Madrid", "us", "china", "Paris"];
let removedCity = cities.pop();

console.log(cities)         
console.log(removedCity);   

let languages0 = ["English", "tamil", "social", "bio"];
let first = languages0.shift();

console.log(first);
console.log(languages0);

let languages3 = ["kotlin", "ruby", "C"];
languages3.unshift("JavaScript");

console.log(languages3);

//for each
function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];
prices.forEach(printElements);

//for in
const string = 'code';
for (let i in string) {
    console.log(string[i]);
}

const arr = [ 'hii', 1, 'yyyy' ];
for (let x in arr) {
    console.log(arr[x]);
}

const student = {
    name: 'aaa',
    class: 7,
    age: 12
}
for ( let key in student ) {
   console.log(`${key} => ${student[key]}`);
}

//for of

const students = ['John', 'Sara', 'Jack'];
for ( let element of students ) {
console.log(element);
}


let map = new Map();


map.set('name', 'Jack');
map.set('age', '27');

for (let [key, value] of map) {
    console.log(key + '- ' + value);
}

//iarray
let numbers = 10;
console.log(Array.isArray(numbers));

let text = ["JavaScript","c"];
console.log(Array.isArray(text));

const prices0 = [1800, 2000, 3000, 8000];
let newPrices0 = prices0.map(Math.sqrt);

console.log(newPrices0);

const message = ["JavaScript ", "is ", "fun."];
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

let joinedString = message.reduce(joinStrings);
console.log(joinedString);

let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}
let evenNumber1 = number1.filter(checkEven);
console.log(evenNumber1);
