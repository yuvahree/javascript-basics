
let sentence = "world in nature";
//let len = sentence.length;

console.log( sentence.length);


let string1 = "JavaScript";
let len = string1.length;

console.log(len);

/*let string2 = "Programming";
string2.length = 5;

console.log(string2); 
console.log(string2.length);*/

const text = "ball. bat";
const pattern=/b/g;
const new_text = text.replace(pattern, "J");

console.log(new_text);

sentence = "tajmahal is to wonder what Car is to Carpet.";

let check = sentence.startsWith("tajmahal");
console.log(check); 
let check1 = sentence.startsWith("tajmahal is");
console.log(check1); 
let check2 = sentence.startsWith(" to wonder");
console.log(check2); 
let check3 = sentence.endsWith("Carpet.");
console.log(check3); 

let str = "Hello hii!";
let txt = "software developer.";
let uppercase_str = str.toUpperCase();
console.log(uppercase_str); 
let uppercase = txt.toUpperCase();
console.log(uppercase); 

const message = "TECHNOLOGY";
const lowerMessage = message.toLowerCase();
console.log(lowerMessage);

const msg = "JavaScript is fun";
let result = message.includes("Java");
console.log(result);

const holiday = "Happy holiday!";
const list = holiday.repeat(3);
console.log(list);

const string = "Hello World";
let result1 = string.charAt(6.3);
console.log("Character at index 6.3 is " + result1);
let result2 = string.charAt(6.9);
console.log("Character at index 6.9 is " + result2);
let result3 = string.charAt(6);
console.log("Character at index 6 is " + result3);

let string6 = "CODES";
let paddedString6 = string6.padStart(10, "$");

console.log(paddedString6);


let string5 = "CODE";
let  paddedString2= string5.padEnd(17, 'JavaScript');

console.log(paddedString2);

const mssg = "nature is best place.";
const exp = /nature/;
let value= mssg.match(exp);
console.log(value);


const sentence1= "it will be destroyed.";
const regex =  /destroyed[a-z]*/gi;
let result4 = sentence1.matchAll(regex);
console.log(Array.from(result4));

let string8 = "world wide technology.";
let index = string8.search("wide");

console.log(index);

let emptyString = "";
let joinedString = emptyString.concat("html", " is", " great.");

console.log(joinedString);

const msage = "month::of::july";
let result7 = msage.split("::");
console.log(result7);

let str3 = "   april  ";
console.log(str3.trim()); 


let str1 = "  s o i l  ";
console.log(str1.trim()); // 
