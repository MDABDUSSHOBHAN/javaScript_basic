// her is the example on spreed operator

let number =[1,3,4,5];
let newNumber = [...number,10,11,12];
console.log(newNumber);


// object spread operaor

let obj={name:'abdus_shobhan',age:33}
let newObject = {...obj,location:'Dhaka'};
console.log(newObject);

// rest Params in JavaScript
function add(){
    let sum=0;
    for(let i=0;i< arguments.length;i++){
        sum=sum+arguments;
    }

    return sum;
}

//Point to be noted:- normal object not spread anytime.
let myName = "abdus_shobhan";
let newName = {...myName};

console.log(newName);
