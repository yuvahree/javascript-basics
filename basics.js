//object

let person={
    name:"yuva",
    age:22,
    team:"devops",
    isAlive:true,
    address:"vellore,india",
    siblings:{
        brother:"aaa",
        sister:"bbb",
        uncle:"ccc",  

        parent:{
          father:"ddd",
          mother:"eee"

          
        }  
    }
    

    
}
console.log(person)


person.age=34
console.log(person.age)

console.log(person[`team`])

console.log(person.siblings)
console.log(person.siblings.sister)

console.log(person.siblings.sister)


const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person1)
//arrays

let favcolors=["red","black","green"]
console.log(favcolors)

console.log(favcolors[1])

favcolors[7]="pink"
favcolors[5]="90"

console.log(favcolors.length)

//functions

function greetuser(lastname) {
    let firstname;
    //let lastname="vvv";
    let msg= "hello" + firstname + "is" + lastname ;

    console.log(msg)
}
greetuser()
greetuser("qqq")

function add(number1, number2){
    console.log(number1+number2)
}

add(45,50)

let z = myFunction(6, 9);   

function myFunction(a, b) {
  return a * b;             
}
console.log(z)

//string
let text = "We are the so-called \"software\" from the tn.";
console.log(text)

const quotes = "The character \\ is called backslash.";
console.log(quotes)

//string methods
let txt = "is the world symbol 'peace'";
let length = txt.length;

console.log(txt)

let str = "Apple, Banana, Kiwi";
let part = str.slice(2, 13);

console.log(part)

const message = "have a fun";
let result = message.slice(0, 12);
console.log(result);

const string = "JavaScript was one of the most familier programming language.";

console.log(string.slice(-9)); 
console.log(string.slice(-9, -1)); 

const msg = "tajmahal is wonderful";
let count = message.substring(0, 10);
console.log(count);
