var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

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

describe('same test with Assert / Expect / Should', function() {

  describe('GIVEN a list of 4 colours: white, blue, green, red', function() {
    var colours = ['white', 'blue', 'green', 'red'];
    // Assert
    it('WHEN the client request the list THEN 4 items are returned', function() {
      assert.lengthOf(colours, 4);
    })
    // Expect
    it('WHEN the client request the list THEN 4 items are returned', function() {
      expect(colours).to.have.lengthOf(4);
    })
    // Should
    it('WHEN the client request the list THEN 4 items are returned', function() {
      colours.should.have.lengthOf(4);
    })

  });
});
