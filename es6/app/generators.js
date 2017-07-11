// const arrayIterator = (array) => {
//   let index = 0;
//
//   return {
//     next: () => {
//       if (index < array.length) {
//         let next = array[index];
//         index += 1;
//         return next;
//       }
//     }
//   };
// };

function* arrayIterator() {
  for (let arg of arguments) {
    yield arg;
  }
}

var it = arrayIterator(1,2,3);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
