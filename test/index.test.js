var expect = require('chai').expect;

var famousNames = require ('../index').famousNames;

describe('Hello world testing !', function() {
  it('should be true', function() {
    expect(true).to.be.true;
  })
});

describe('Animals list', function() {
  it('should include Grumpy', function() {
    expect(famousNames).to.include('Grumpy');
  })
});