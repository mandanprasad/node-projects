var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      }
      else {
        reject('It must be number')
      }
    }, 1500)
  });
}

asyncAdd(5, '7').then((result) => {
  console.log(`Result: ${result}`);
  return asyncAdd(result, 33)
}).then((res) => {
  console.log(`Res is: ${res}`);
})
.catch((error) => {
  console.log(error);
})







// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey it works!');
//     // reject('Unable to fulfill promise');
//   }, 2500)
// });
//
// somePromise
//   .then((message) => {
//     console.log('Success: ', message);
//   }, (error) => {
//     console.log(`error: ${error}`);
//   })
