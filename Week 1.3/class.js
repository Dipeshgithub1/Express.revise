//classes

class Animal {

    constructor(name,legCount,speaks){
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
      
    }
    speak() {
      console.log("hi there " + this.speaks)
    }
  };
  
  let dog = new Animal("dog",4,"bow bow")
  let cat = new Animal("cat",4,"meow meow")
  
  cat.speak()  