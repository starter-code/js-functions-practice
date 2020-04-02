/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const jsFunctions = require('../src/js-functions-1');
require('mocha-sinon');

const expectedOutput = {
  hello: 'Hello World!',
  helloString: 'Hello!',
  helloArray: ['Hi!', 'Hello there!'],
  helloObject: 'Hi World!',
};

const params = {
  hello: undefined,
  helloString: 'Hello!',
  helloArray: ['Hi!', 'Hello there!'],
  helloObject: { message: 'Hi World!' },
};

const originalLog = console.log;

describe('JS Functions Practice: Hello World!', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });
  afterEach(function() {
    console.log = originalLog;
  });

  it('hello should log "Hello World!', () => {
    jsFunctions.hello();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutput.hello)).to.be.true;
  });

  it('helloString should log "Hello!', () => {
    jsFunctions.helloString(params.helloString);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutput.helloString)).to.be.true;
  });

  it('helloArray should log "Hi! and "Hello there!"', () => {
    jsFunctions.helloArray(params.helloArray);
    expect(console.log.calledTwice).to.be.true;
    expect(console.log.calledWith(expectedOutput.helloArray[0])).to.be.true;
    expect(console.log.calledWith(expectedOutput.helloArray[1])).to.be.true;
  });

  it('hello should log "Hi World!', () => {
    jsFunctions.helloObject(params.helloObject);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith(expectedOutput.helloObject)).to.be.true;
  });
});
