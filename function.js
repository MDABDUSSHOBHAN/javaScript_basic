// function default parameter
function myFunc(x=10){
    return x;
}

console.log(myFunc(1));

const numbers = [1,2,3,4];
const newNumber = [...numbers,10,11,12];
console.log(newNumber);

var myObj = {
    name:'abdus_shobhan',
    id:12232,
}
var a = myObj;
console.log(a);
var num=[1,2,3];
var newNum= [...num];//exact corbon copy of num array assign to newNum.
num.push(5);
console.log('afterPush',num);
console.log(newNum);

var number1 = [1,2,3];
var number2=[4,5,6];
var calcut = [...number1,...number2];
console.log(calcut);

function myNumber(...params){

   
    console.log(typeof(params));
    console.log(params);

}
myNumber(5,4,'sex',5,6);

const myObje1={
    name:"abdus_shobhan",
    age:23,
    BloodGroup:'A+',
    education:{
        degree:'Diploma'
    }
}

 const {name:user_name,education:{degree}}  = myObje1;
 console.log(user_name);
 console.log(degree);


//  array distructring a arry hobe = sign ar uvoi pase 
const [x,y] = [1,2,3,4];
console.log(x,y);

var g=5;
var v=9;
console.log(`I am ${g} and I am also ${v}`);

// there is the application of set function

function log(anything){
    return console.log(anything);
}
// Sets

let myArr = [1,2,3];
let mySet = new Set(myArr);
mySet.add(6);
mySet.add("Banglasesh");


log(mySet);

log([...mySet]);


let mySet1 = new Set(myArr);

let object ={
    a:4,
    b:7
}

mySet1.add(object);
mySet1.add(object);
log(mySet1);

// unique element or remove duplicate element

let myDup =[1,2,3,4,5,5,5,6,5];

let mySet2= new Set(myDup);
mySet2.add(5);
log([...mySet2]);

// weak set

let ws = new WeakSet([{a:1},{b:3}]);

log(ws);

// copyWithin() array method
 let a1 = ['JavaScript','PHP','Python','Ruby','C++','RUST'];
 console.log(a1.length)
 a1.copyWithin(3,2);//never change array length
 log(a1);