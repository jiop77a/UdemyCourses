//prototypes

// let person = {
//   firstname: 'a',
//   lastname: 'b',
//   greet: function() {
//     return this.firstname + ' ' + this.lastname;
//   }
// };
//
// let john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Smith';
//
// console.log(john);

let EventEmitter = require('events');
let util = require('util');

class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello world!';
  }

  greet(data) {
    console.log(`${this.greeting} ${data}`);
    this.emit('greet', data);
  }

}

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
//   console.log(this.greeting + ': ' + data);
//   this.emit('greet', data);
// };

let greeter1 = new Greetr();

greeter1.on('greet', (data) => console.log('Someone greeted!: ' + data));

greeter1.greet("Tony");
