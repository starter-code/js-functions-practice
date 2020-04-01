const shouldRunMain = process.argv[2];

// expects no argument
// example usage: hello()
const hello = () => {
  // fill in this function
};

// expects a string argument
// example usage: helloString("Bye!")
const helloString = inputString => {
  // fill in this function
};

// expects an array of strings argument
// example usage: helloString(["Bye!", "Hi!"])
const helloArray = inputArray => {
  // fill in this function
};

// expects an object with key "message" argument
// example usage: helloString({message: "Hello"})
const helloObject = inputObject => {
  // fill in this function
};

(function main() {
  if (!shouldRunMain) {
    return;
  }

  hello();
  helloString(); // fill in argument
  helloArray(); // fill in argument
  helloObject(); // fill in argument
})();

module.exports = {
  hello,
  helloString,
  helloArray,
  helloObject,
};
