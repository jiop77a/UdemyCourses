class Greetr {
  constructor() {
    this.greeting = "hello world";
    this.greet = () => {
      console.log(this.greeting);
    };
  }
}

export default new Greetr();
