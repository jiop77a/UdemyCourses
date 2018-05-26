var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet', () => console.log('someone says hello'));

emtr.on('greet', () => console.log('a greeting occurred'));

console.log('Hello');
emtr.emit('greet');
