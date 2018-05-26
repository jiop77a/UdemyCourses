class Greetr {
  constructor() {
    this.greeting = "hello world";
    this.greet = () => {
      console.log(this.greeting);
    };
  }
}

module.exports = Greetr;
