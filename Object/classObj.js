class Employee {
  constructor() {
    console.log("This is this id", this);
    this.fruits = "mango";
    this.employee = "Rutvik";
  }
}

const Rutvik = new Employee();
//
// console.log(Rutvik);

const thisKeyWords = this;

console.log(thisKeyWords);
