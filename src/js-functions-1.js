const shouldRunMain = process.argv[3];

// expects no argument
// example usage: hello()
// expected output: prints "Hello World!"
// expected return: undefined
const hello = () => {
  // fill in this function
  console.log('Hello World!');
};

// expects a string argument
// example usage: helloString("Bye!")
// expected output: prints "Bye!"
// expected return: undefined
const helloString = (inputString) => {
  // fill in this function
};

// expects an array of strings argument
// example usage: helloString(["Bye!", "Hi!"])
// expected output: prints "Bye!" and then prints "Hi!"
// expected return: undefined
const helloArray = (inputArray) => {
  // fill in this function
};

// expects an object with key "message" argument
// example usage: helloString({message: "Hello"})
// expected output: prints "Hello World!"
// expected return: undefined
const helloObject = (inputObject) => {
  // fill in this function
};

// expects 3 arguments
// example usage: helloString("Hello", "World", "!")
// expected output: prints "Hello World !"
// expected return: undefined
const helloArguments = (argumentOne, argumentTwo, argumentThree) => {
  // fill in this function
};

(function main() {
  if (!shouldRunMain) {
    return;
  }

  console.log('Starting Main');
  hello();
  helloString(); // replace arguments
  helloArray([]); // replace arguments
  helloObject({}); // replace arguments
  helloArguments('', '', ''); // replace arguments
})();

module.exports = {
  hello,
  helloString,
  helloArray,
  helloObject,
  helloArguments,
};
