// callback
 
const paymentSuccess = true;
const marks=90;

function enroll(callback){
    console.log("course enrollment is in progress");
    
    setTimeout(function(){
        if(paymentSuccess){
            callback()
        }
        else{
            console.log('Payment failed');
        }
    },2000)
}

function progress(callback){
    console.log('Course on Progress....');

    setTimeout(function(){
        if(marks>=80){
            callback();
        }
        else{
            console.log('You could not get enough marks to get certificates');
        }
        
    },2000);
}

function getCertificate(){
    console.log('Congratulations! you got certificate.')
}

enroll(function(){
    progress(getCertificate)
})


