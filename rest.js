// Rest parameter in JavaScript

import myName from './import.js'

console.log('fromRest',myName);
// function add(a,b,c,...num){
//     //console.log('value of abc',a,b,c);
//     console.log('number is:',num);
//     let sum=0;
//     for(let i=0;i< arguments.length;i++){
//         sum=sum+num[i];
//     }
//     return sum;
// }
// console.log(add(1,2,3,4,5));

let a=5;
let b=[4,5,6];

// for(bv of b){
// sum = bv+a;

// }
// console.log(sum)
// let total = a+b;
// console.log(a+b);

sum = a+b.reduce((sum,value)=>sum+value);
console.log(sum);


const user = {
    name:'Anurag',
    age:24,
    address:{
        city:"Rangupr",
        state:'Karnataka',
    },
}

const {name,age} = user;
console.log(name,age);

// distructring the value of address

const {address:{city}} = user;
console.log(city);


// const age = user.age;

// console.log('age:',age);

// optional chining in JavaScript
console.log(user.addressd?.city)

function hello(){

    return "Hello";
}

console.log(hello);