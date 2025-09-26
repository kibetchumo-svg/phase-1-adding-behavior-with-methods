// Your code here
// Cat class
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

// Dog class
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

// Bird class
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex.toLowerCase() === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

// ----------------------
// Example usage:
// ----------------------
const cat1 = new Cat("Mittens", "female");
console.log(cat1.speak()); // Mittens says meow!

const dog1 = new Dog("Rex", "male");
console.log(dog1.speak()); // Rex says woof!

const bird1 = new Bird("Polly", "male");
console.log(bird1.speak()); // It's me! Polly, the parrot!

const bird2 = new Bird("Lola", "female");
console.log(bird2.speak()); // Lola says squawk!
