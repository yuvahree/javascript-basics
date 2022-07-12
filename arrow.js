//arrow function

let line=()=> console.log(`hello`);
line();


let line1= x => console.log(`hello`);
line1();

let age=7;
let welcome=(age<118) ?
  () => console.log(`child`):
  () => console.log(`adult`);

  welcome();

  let sum=(a,b) =>{
      let result=a+b;
      return result;
  }
  let result1=sum(5,7);
  console.log(result1);

function person() {
    this.name='aaa',
    this.age=45,
    this.sayname=function(){
        console.log(this.age);
        function innerfunc(){
            console.log(this.age);
            console.log(this);
        }
        innerfunc();
    }
  }


function person() {
    this.name='bbb',
    this.age=95,
    this.sayname=function(){
        console.log(this.age);
        let innerfunc=() =>{
        console.log(this.age);
        }
        innerfunc();
    }
  }
const x1=new person();
x1.sayname();

let x=function(){
    console.log(arguments);
}
x(55,66,78);

//spread operator

const arrvalue=['my','name','is','this','and','im','a','developer'];
console.log(arrvalue);
console.log(...arrvalue);

const arr3=['one','two'];
const arr4=[...arr3,'three','four','five','six'];

console.log(arr4);

let arr1=[100,505,265,978,125];
let arr2=[...arr1];

console.log(arr1);
console.log(arr2);

arr1.push(1000);

console.log(arr1);
console.log(arr2);

const obj1={x:1,y:2};
const obj2={z:3};
const obj3={...obj1, ...obj2};

console.log(obj3);

//map

const map1 = new Map();
console.log(map1);

let map3=new Map();
map3.set('info', {name:'mmm',age:26});

console.log(map3);

let map2=new Map();
let obj={};
map2.set(obj, {name:'lll',age:16});

console.log(map2);

let map4=new Map();
map4.set('info', {name:'sssss',age:86});

console.log(map4.get('info'));

const set1=new Set([1,2,3]);
let map5=new Map();
map5.set('info', {name:'ooooo',age:126});

console.log(map4.get('info'));

let map6=new Map();
map6.set('info', {name:'mmm',age:26});
map6.delete('info');

console.log(map6);

let map7=new Map();
map7.set('info', {name:'bbb',age:42});
map7.clear();

console.log(map7);

let map8=new Map();
map8.set('name','ppp');
map8.set('age','26');
for(let [key, value] of map8){
console.log(key+ '-'+value);
}

let map9=new Map();
map9.set('name','yyy');
map9.set('age','76');
for(let key of map9.keys()){
console.log(key);
}

let map0=new Map();
map0.set('name','kkk');
map0.set('age','26');
for(let values of map0.values()){
console.log(values);
}

const weakmap=new WeakMap();
console.log(weakmap);

let obj7={};
weakmap.set(obj7, 'hello');

console.log(weakmap);

console.log(weakmap.get(obj));
console.log(weakmap.has(obj));
console.log(weakmap.delete(obj));
