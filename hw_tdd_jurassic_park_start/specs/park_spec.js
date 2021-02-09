const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Dinosaur Digs', 6.50);
  })

  it('should have a name', function() {
    const expected = 'Dinosaur Digs';
    assert.strictEqual(expected, park.name)
  });

  it('should have a ticket price', function() {
    const expected = 6.50;
    assert.strictEqual(expected, park.ticket_price)
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
