var expect = require('chai').expect;

var animals = require ('../index').animals;

describe('Hello world testing !', function() {
  it('should be true', function() {
    expect(true).to.be.true;
  })
});

describe('Animals list', function() {
  it('should include Grumpy', function() {
    var famousNames = animals.map(animal => animal.name);
    expect(famousNames).to.include('Grumpy');
  })
});