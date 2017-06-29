import Animal from './animal.js';

class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }

  hello() {
    console.log(`Hi, I'm ${this.name} from pride rock`);
  }
}

let son = new Lion("Simba", 2, "gold");
console.log(son.hello());
