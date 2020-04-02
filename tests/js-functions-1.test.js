/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const jsFunctions = require('../src/js-functions-1');
require('mocha-sinon');

const expectedOutputOne = {
  hello: 'Hello World!',
  helloString: 'Hello!',
  helloArray: ['Hi!', 'Hello there!'],
  helloObject: 'Hi World!',
  helloArguments: 'Hi World !',
};

const expectedOutputTwo = {
  hello: 'Hello World!',
  helloString: 'Hello2!',
  helloArray: ['Hi2!', 'Hello there2!', 'Hello2!'],
  helloObject: 'Hi World2!',
  helloArguments: 'Hello there person!',
};

const paramsOne = {
  hello: undefined,
  helloString: 'Hello!',
  helloArray: ['Hi!', 'Hello there!'],
  helloObject: { message: 'Hi World!' },
  helloArguments: ['Hi', 'World', '!'],
};

const paramsTwo = {
  hello: 'Hello World!',
  helloString: 'Hello2!',
  helloArray: ['Hi2!', 'Hello there2!', 'Hello2!'],
  helloObject: { message: 'Hi World2!' },
  helloArguments: ['Hello', 'there', 'person!'],
};

const originalLog = console.log;

describe('JS Functions Practice: Hello World!', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });
  afterEach(function() {
    console.log = originalLog;
  });

  it('hello should log "Hello World!"', () => {
    jsFunctions.hello();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutputOne.hello)).to.be.true;
  });

  it('helloString should log "Hello!"', () => {
    jsFunctions.helloString(paramsOne.helloString);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutputOne.helloString)).to.be.true;
  });

  it('helloString should log "Hello2!"', () => {
    jsFunctions.helloString(paramsTwo.helloString);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutputTwo.helloString)).to.be.true;
  });

  it('helloArray should log "Hi!" and "Hello there!"', () => {
    jsFunctions.helloArray(paramsOne.helloArray);
    expect(console.log.calledTwice).to.be.true;
    expect(console.log.calledWith(expectedOutputOne.helloArray[0])).to.be.true;
    expect(console.log.calledWith(expectedOutputOne.helloArray[1])).to.be.true;
  });

  it('helloArray should log "Hi2!" and "Hello there2!" and "Hello2!"', () => {
    jsFunctions.helloArray(paramsTwo.helloArray);
    expect(console.log.calledThrice).to.be.true;
    expect(console.log.calledWith(expectedOutputTwo.helloArray[0])).to.be.true;
    expect(console.log.calledWith(expectedOutputTwo.helloArray[1])).to.be.true;
    expect(console.log.calledWith(expectedOutputTwo.helloArray[2])).to.be.true;
  });

  it('helloObject should log "Hi World!"', () => {
    jsFunctions.helloObject(paramsOne.helloObject);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutputOne.helloObject)).to.be.true;
  });

  it('helloObject should log "Hi World2!"', () => {
    jsFunctions.helloObject(paramsTwo.helloObject);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutputTwo.helloObject)).to.be.true;
  });

  it('helloArguments should log "Hi World !"', () => {
    jsFunctions.helloArguments(...paramsOne.helloArguments);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(...paramsOne.helloArguments)).to.be.true;
  });

  it('helloArguments should log "Hello there person!"', () => {
    jsFunctions.helloArguments(...paramsTwo.helloArguments);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(...paramsTwo.helloArguments)).to.be.true;
  });
});
