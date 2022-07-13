let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

console.log(x.toExponential(2));

let colorlist=['green','white','pink','red'];
console.log(colorlist.length);
let randomlist=['python',768];
console.log(randomlist.length);
let emptyArray=[];
console.log(emptyArray.length);

let colorslist=['green','white','pink','red','black','blue','rose'];
colorslist.length = 5
console.log(colorlist);

let number=['8','4','7','1','0','7'];
let reversedarray=number.reverse();
console.log(reversedarray);

let districts=['pune','goa','kerala','ooty','korea'];
let reversed_array=[...districts].reverse();
//let reversed_array=districts.reverse();
console.log('reversed_array: ',reversed_array);
console.log('original array: ',districts);

let names=["yyy","bbb","aaa","fff","ddd"];
console.log(names.sort());

let pricelist=[1000,80,67,2,30];
console.log(pricelist.sort());



let names1=["yellow","bats","adam","fishing","dog"];
function len_compare(a,b){
    return a.length-b.length;
}
names1.sort(len_compare);
console.log(names1);


let number1=['8','4','7','1','0','7'];
number1.sort(function(a,b){
    return a-b;
});

console.log("Ascending -"+number1);
number1.sort((a,b)=> b-a);
console.log("descending -"+number1);

let districts1=['pune','goa','kerala','ooty','korea'];
districts1.fill('tamilnadu');
console.log(districts1);

let para=[`life`, `is`, `a`, `journey`];
let joinedpara=para.join(``);
console.log(joinedpara);

let info=["india", 27,"america"];
let info_str=info.join("|");
console.log(info);
console.log(info_str);

let collection=['2','8','.','4','9'];
console.log(collection.join(''));

let random=[52, "cat", undefined];
console.log(random.join(" and "));

let items=["python", 3,"b",9];
let itemsstring=items.toString();

console.log(itemsstring);

let info1=["india", 27,"america"];
let info1_str=info1.toString();

console.log(info1_str);
console.log(info1);

let nestedArray=[1,6,3, ["kiwi", 8]];
let resultingArray=nestedArray.toString();

console.log(resultingArray);

//array reduce

const words=["month","of","july"];
function joinStrings(accumulator, currentvalue){
    return accumulator + currentvalue;
}
let joinedString=words.reduce(joinStrings);
console.log(joinedString);

const numbers=[11,22,88,77,89];
function sum_reducer(accumulator, currentvalue){
    return accumulator + currentvalue;
}
let sum=numbers.reduce(sum_reducer);
console.log(sum);

let summation=numbers.reduce(
    (accumulator, currentvalue)=> accumulator + currentvalue
);

console.log(summation);

const number0=[1500,41,663,96,500];
let difference=number0.reduce(
    (accumulator, currentvalue)=> accumulator - currentvalue
);

console.log(difference);


const expenses=[1500,41,663,96,500];
const salary=1000;
let remaining=expenses.reduce(
    (accumulator, currentvalue)=> accumulator - currentvalue,salary
);

console.log(remaining);

//array filter

let number6=[1,8,4,7,9,2];
function checkeven(number){
    if(number % 2==0)
     return true;
    else
     return false; 
}
let evennumber6=number6.filter(checkeven);

console.log(evennumber6);

/*const prices=[1200,22,null,3333,5433,"thousand",6066,4212]
function checkprice(element){
    return element > 3333 && !Number.isNaN(element);
}
let filterprices=prices.filter(checkprice);
console.log(filteredprices);

let newprices=prices.filter((price)=> (price > 3333 && !Number.isNaN(price)));
console.log(newprices);*/

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  
console.log(filterItems(fruits, 'an'))  

//array map

let number7 = [1, 4, 9];
function square(number){
    return number * number;
}

let square_number7=number7.map(square);
console.log(square_number7);

const prices = [1800, 2000, 3000, 5000, 500, 8000];
let newPrices = prices.map(Math.sqrt);

console.log(newPrices);

const string = "JavaScript";
const stringArr = string.split('');
let asciiArr = stringArr.map(x => x.charCodeAt(0));

console.log(stringArr);
console.log(asciiArr); 

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);

console.log(map1);

const strings = ['10', '10', '10'];
const number9 = strings.map(parseInt);

console.log(number9);

//array foreach

let students = ['Jjjjjj', 'vvv', 'kkkk'];
students.forEach(myFunction);
function myFunction(item) {

    console.log(item);
}

let student0 = ['aaaa', 'bbbb', 'ccccc'];
student0.forEach(myFunction);
function myFunction(item, index, arr) {
  arr[index] = 'Hello ' + item;
}

console.log(student0);

const student1 = ['John', 'Sara', 'Jack'];

student1.forEach(element => {
  console.log(element);
});

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];
for (let i = 0; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);

const set = new Set([1, 2, 3]);
set.forEach(myFunction);
function myFunction(item) {
    console.log(item);
}

let map = new Map();
map.set('name', 'Jack');
map.set('age', '27');
map.forEach (myFunction);

function myFunction(value, key) {
    
    console.log(key + '- ' + value);
}