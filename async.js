// this is for async and await 

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

// function asyncFunction(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("resolve");
//         },2000);
//     })
// }


async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();


async function  hello(){
    return "Hello";
}

console.log(hello());