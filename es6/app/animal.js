class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello() {
    console.log(`HI, I'm ${this.name} from the Animal kingdom`);
  }
}

export default Animal;
