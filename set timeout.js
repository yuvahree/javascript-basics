//set timeout
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');


/*function greet() {
    console.log('Hii');
}

setInterval(greet, 1000);*/


/*function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('iiiiii');
}
greet('yyyy', callMe);*/

async function f() {
    console.log('bbb.');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 1000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

//oops
//inheritance

class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}
class Student extends Person {

}

let student1 = new Student('yyyyy');
student1.greet();

//super keyword
class Person1 { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student1 extends Person1 {

    constructor(name) {
    
        console.log("Creating student class");
        
        super(name);
    }

}

let student2 = new Student1('Jack');
student2.greet();

// overriding
class Person2 { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
 
}

class Student2 extends Person2 {

    constructor(name) {
        
        super(name);
        
        this.occupation = 'Student';
    }
    
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student2('kkkkkk');
p.greet();