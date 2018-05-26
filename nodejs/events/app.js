var Emitter = require('events');
var eventConfig = require('./config').events;

let { GREET } = eventConfig;

var emtr = new Emitter();

emtr.on(GREET, () => console.log('someone says hello'));

emtr.on(GREET, () => console.log('a greeting occurred'));

console.log('Hello');
emtr.emit(GREET);
