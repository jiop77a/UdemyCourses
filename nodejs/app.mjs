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

import greet from './greet.mjs';

greet.greet();
greet.greeting = "changed hello world";

import greet2 from './greet.mjs';
greet2.greet();
