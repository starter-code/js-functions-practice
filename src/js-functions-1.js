const shouldRunMain = process.argv[3];

// expects no argument
// example usage: hello()
// expected output: console logs "Hello World!"
// expected return: undefined
const hello = () => {
  // fill in this function
  console.log('Hello World!');
};

// expects a string argument
// example usage: helloString("Bye!")
// expected output: console logs "Bye!"
// expected return: undefined
const helloString = inputString => {
  // fill in this function
  console.log(inputString);
};

// expects an array of strings argument
// example usage: helloString(["Bye!", "Hi!"])
// expected output: console logs "Bye!" and then console logs "Hi!"
// expected return: undefined
const helloArray = inputArray => {
  // fill in this function
  inputArray.forEach(input => console.log(input));
};

// expects an object with key "message" argument
// example usage: helloString({message: "Hello"})
// expected output: console logs "Hello World!"
// expected return: undefined
const helloObject = inputObject => {
  // fill in this function
  console.log(inputObject.message);
};

// expects 3 arguments
// example usage: helloString("Hello", "World", "!")
// expected output: console logs "Hello World!"
// expected return: undefined
const helloArguments = (argumentOne, argumentTwo, argumentThree) => {
  // fill in this function
  console.log(argumentOne, argumentTwo, argumentThree);
};

(function main() {
  if (!shouldRunMain) {
    return;
  }

  console.log('Starting Main');
  hello();
  // helloString(''); // fill in argument
  // helloArray([]); // fill in argument
  // helloObject({}); // fill in argument
  helloArguments(...['Hi', 'World', '!']); // fill in arguments
})();

module.exports = {
  hello,
  helloString,
  helloArray,
  helloObject,
  helloArguments,
};
