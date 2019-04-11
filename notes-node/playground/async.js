console.log("Hello world");

setTimeout(() => {
  console.log("Inside the callback");
},2000)

setTimeout(() => {
  console.log("SecondTime out");
},0)
console.log("Finishing the app");
