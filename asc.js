// assinchronous 2
// 
// console.log("A");
// console.log("B");
// console.log("C");
// আউটপুট হবে: A → B → C

// asynchronous 
console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");
// আউটপুট হবে: A → C → (1 second পর) B

