// updated es6

function square(num){
    return num*num;
}

console.log(square(2));

//normalFunction a argument passed kora jai
function showArguments() {
  console.log(arguments);
}


console.log(showArguments())


setTimeout(() => {
    console.log('Hello!')
},1000);

const random = () => Math.floor(Math.random()*10);
console.log(random());



// defaultParameter in JavaScript

function Multiply(a,b=1){
    return a+b;
}

console.log(Multiply(1,5));

function rollADie(numberOfsides=6){
    return Math.floor(Math.random()*numberOfsides);
}
console.log(rollADie(5));

