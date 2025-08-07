let promis = new Promise((resolve,reject)=>{
    //Here is some asynchronous..............
})
const status = false;
console.log('Task 1');

// Here is declared promised

// start of Function Definition 
const promise = new Promise(function(resolve,reject){

    setTimeout(() => {
        if(status){
            resolve('Task-2');
        }
        else{
            reject('failed');
        }
        
    }, 2000);
});
// End of Function Definition

promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })







// setTimeout(function(){

//     if(status){

//         console.log('Task 2');
//     }
//     else {
//         console.log('Failed');
//     }
// },2000);

console.log('Task 3');