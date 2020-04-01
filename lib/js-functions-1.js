const hello = () => {
  // fill in this function
  console.log('Hello World!');
};

const helloString = inputString => {
  // fill in this function
  console.log(inputString);
};

const helloArray = inputArray => {
  // fill in this function
  inputArray.forEach(str => {
    console.log(str);
  });
};

const helloObject = inputObject => {
  // fill in this function
  console.log(inputObject.message);
};

module.exports = {
  hello,
  helloString,
  helloArray,
  helloObject,
};
