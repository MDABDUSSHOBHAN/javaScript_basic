// localStorage vs sessionStroage

// localStorage.setItem('userId',22);
 addToLocalStorage = ()=>{

    const id = document.getElementById('storage_id');
    let value_id = id.value;
    
    const value = document.getElementById('storage_value');
    let value_value = value.value;
    if(value_id && value_value) {
     localStorage.setItem(value_id,value_value);
    }
    
    id.value = '';
    value.value = ''
}


var myNumber = null;
if(myNumber){
    console.log("i am truthy");
}
else {
    console.log("I am falsy")
}

// turnary operator in js 
var age;

age == 18? "aduld":"chield"

var numbers = [1,2,3,4,5];
 
var result=numbers.find(function (currentValue,currentIndex){
   
    return currentValue > 4;
});
console.log(result);

var number = [1,2,3,4,5,6,7,8,9];

var res = number.findIndex((currentValue,index,arr)=>{
return currentValue > 5
});

console.log('indexArray',res);
var rslice= numbers.slice(1,4);
console.log(rslice);

// reduce methods in JavaScript
var number = [1,2,3,4,5,6];

// aita main array ke change kore na 
var res = number.reduce((preValue,currentValue)=>{
    return preValue+currentValue;
},0);

console.log(res);


const myObj  = {
    name:"JavaScript",
    estd:"1967",
    founder:"Brendan Eich",
}
for(property in myObj){

    console.log(property);
}


var keys = Object.values(myObj);

console.log(keys);
