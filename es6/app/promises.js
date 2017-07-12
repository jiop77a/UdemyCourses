// let p = new Promise((resolve, reject) =>{
//   reject('Rejected promise data');
// });
//
// p.then(response => console.log(response))
//   .catch(error => console.log(error));

  //Promises represent stand-in values for data

  let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved promise data'), 3000);
  });

  p.then(response => console.log(response))
    .catch(error => console.log(error));
