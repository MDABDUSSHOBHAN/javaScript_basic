// 
function myCalculate(num1,num2,callback){
    let sum = num1+num2;

if(callback){
    callback(sum);
}
return sum;
}
function showValue(value){
    console.log('my value is:',value);
}

myCalculate(2,3,showValue);
