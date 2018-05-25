// var arr = [];
//
// for (let i = 0; i < 4; i++) {
//   console.log(arr);
//   arr.push(function() {
//     return (`${i} is the best number`);
//   });
// }
//
// console.log(arr[0]());
// console.log(arr[1]());
// console.log(arr[2]());
// console.log(arr[3]());

// let greet  = require('./greet6.js');
// greet();

// greet.greet();
// greet.greeting = "changed hello world";
//
// let greet2  = require('./greet.js');
// greet2.greet();

var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
