var a ="shobhan";
console.log(a);

// arrow function 

let number = (a,b) => {

    return a+b;
}

console.log(number(3,4));

// this keyword with array function 

var javascript = {
    name:"JavaScript",
    libraries:["React","Angular","Vue"],
    printLibraries: function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
}
javascript.printLibraries();

// truthy and falsy falue in javaScript 

// List of falsyValue: NaN,undefiened,null,false,""

// var type = (age>=14)?"Aduld":"chield";

var numbers = [1,2,3,4,5,6,7,8,9,3];
var result = numbers.find(function(correntValue){
    return correntValue%2 == 0;
})
console.log(result);

// findIndex           hrer  findIndex() this function show index Number of an array here is the possion of number
var number1 = [1,2,3,4,5,6,7,8,9];
 var res = number1.findIndex((currentValue,index,arr)=>{

    return currentValue > 4
});


console.log(res);

  var result2=numbers.filter((currentValue)=>{
    return currentValue > 5;
 })

 console.log(result2);
  
 var numberss = [1,2,3,4,5];
 var resultd= numberss.slice(2,4);
 console.log('slice of Array is:',resultd);

 const dd= numberss.push(100);

 console.log(numberss);

//  reduce in js
var num=[1,2,3,4,5];
var res = num.reduce((preValue,currentValue)=>{
    return preValue+currentValue;
},0);

console.log('ReducerFunction Result:',res);

// for in

const myObj={
    name:"JavaScript",
    estd:"1995",
    founder:"Brendan Eich",
}
for(property in myObj){
    console.log(property);
}

//default parameter value with function 

function myFunc(x=10){
    return x;
}

console.log(myFunc(null));

//spread operator
var numberse=[1,2,3,4,5];

var newNumber = [...numberse,10,11];

console.log(newNumber);

// distructring
const user= {
    id:123,
    name:'Sakib',
    age:23
}
var ld= user.name
console.log('object',user);


// template literals
var a =1;
var b = 4;

console.log(`I am ${a} and also ${b}.`);

// array swaping values
let array=[1,2,3,4,5];//swappint the inner element of array.

let temp = array[0];
array[0] = array[1];
array[1]=temp;
console.log(array);

//array distructring way te swapping
[array[0],array[4]] =  [array[4],array[0]];
console.log(array);

//distructring aliases key-value

const usere = {
    name:"abdus_shobhan",
    age:26,
    location:"Dhaka",
}

const{ name:userName,age:userAge,location:userLoc} = usere;
console.log(userName,userAge,userLoc);

//remove duplicateFrom array
const arr = [1, 2, 3, 2, 4, 1, 5];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4, 5]

// shuffling array 

const num1=[1,2,3,4,6];

var res1= num1.sort(()=>
Math.random() - 0.5
);

console.log('shuffling',res1);

// coma operatorlet 

let y=2;
// let x=1;
// z=y++ + x--;
// console.log('value of z',z);
 y=(y++,y);
console.log('comaOperator',y);

console.log('output',[]+[]);

//what will be the output of below code?

function myFuncton(){
    
    return 'Bangladesh';
}
const string = myFuncton `hello `;
console.log(string);

// what will be the output of below code?

// function b(){
//     console.log(`the length is ${this.length}`);
// }

// a = {
//     length: 10,
//     method: function(b){
//         arguments[0]();  // এখানে 'b' call হচ্ছে, কিন্তু তার context 'this' হচ্ছে না 'a'
//     }
// };

// a.method(b, 5);

const d = 'constructor';
console.log(d[d](1))

console.log('sumOF',0.1+0.2);

// prototype

function test(){}
console.dir(test);

//This is for prototype
//method gula seperate korte hobe ai jonno

const personMethods = {

    eat(){
        console.log(`Person is eating`);
    },
    sleep(){
        console.log(`person is sleeping`);
    },
    play(){
        console.log(`person is playing`);
    }
}




function Person(name,age){

    let person= Object.create(personMethods);
    person.name= name;
    person.age=age;
    // person.eat = function(){
    //     console.log(`Person is eating`);
    // };

    // person.sleep = function(){
    //     console.log(`Person in sleeping`);
    // };
    // person.eat=personMethods.eat;
    // person.sleep=personMethods.sleep;
    // person.eat
    // person.play

    return person;
};

const sakib = Person('Sakib',35);

sakib.play();
console.log(sakib);

// const captain = {
//     name:'Mashrafi',
//     age:36,
//     country:'Bangladesh'
// };

// const player = Object.create(captain);
// console.log('newObject',player.name);




















