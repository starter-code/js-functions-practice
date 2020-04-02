/**
 * This file is a reference to see how functions are used.
 * To run this file locally, do command:
 * npm run ref
 */

const myFunction = () => {
  return 10;
};

myFunction(); // returns 10
console.log(myFunction()); // console logs 10

const myOtherFunction = number => {
  return 10 + number;
};

myOtherFunction(10); // returns 20
console.log(myOtherFunction(10)); // console logs 10

const myOtherOtherFunction = (firstArgument, secondArgument) => {
  return firstArgument + secondArgument;
};

myOtherOtherFunction(10, 30); // returns 40
console.log(myOtherOtherFunction(10, 30)); // console logs 40

const mySimpleLoopFunction = number => {
  for (let i = 0; i < number; i++) {
    console.log(i);
  }
};

mySimpleLoopFunction(10); // returns undefined
console.log(mySimpleLoopFunction(10)); // what does this console log?

const myLoopFunction = inputStrings => {
  let baseString = '';
  const cloneInputStrings = [...inputStrings];
  for (let i = 0; i < cloneInputStrings.length; i++) {
    baseString += cloneInputStrings[i];
    cloneInputStrings[i] = baseString;
  }

  return cloneInputStrings;
};

myLoopFunction(['Hi', 'Bye', 'Hello', 'Welcome']); // what does this return?
// console.log(myLoopFunction(['Hi', 'Bye', 'Hello', 'Welcome']));
