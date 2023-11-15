// Below quction is simple function we can convert above function into currying function
const calculator = (a, b) => {
  return a + b;
};

// Currying functions

const Currying = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(calculator(2, 3));

console.log(Currying(2)(3));

const greet = (name) => {
  if (!name || name === "" || name.length <= 0) {
    return undefined;
  } else if (name.length <= 0) {
    return undefined;
  }
  return `Hello, ${name}!`;
};

// export default greet;
