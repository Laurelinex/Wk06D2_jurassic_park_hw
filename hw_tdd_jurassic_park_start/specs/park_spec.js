const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;

  beforeEach(function () {
    park = new Park('Dinosaur Digs', 6.50);
    dino_1 = new Dinosaur('Deinosuchus', 'carnivore', 200);
    dino_2 = new Dinosaur('Loch Ness Monster', 'omnivore', 300);
    dino_3 = new Dinosaur('Gallimimus', 'omnivore', 50);
    dino_4 = new Dinosaur('Stegosaurus', 'herbivore', 100);
    dino_5 = new Dinosaur('Stegosaurus', 'herbivore', 100);
  })

  it('should have a name', function() {
    const expected = 'Dinosaur Digs';
    assert.strictEqual(expected, park.name)
  });

  it('should have a ticket price', function() {
    const expected = 6.50;
    assert.strictEqual(expected, park.ticket_price)
  });

  it('should have a collection of dinosaurs', function() {
    const expected = [];
    assert.deepStrictEqual(expected, park.dino_collection)
  });
    
  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino_1);
    const expected = [dino_1];
    assert.deepStrictEqual(expected, park.dino_collection)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dino_1);
    park.addDino(dino_2);
    park.removeDino(dino_2);
    const expected = [dino_1];
    assert.deepStrictEqual(expected, park.dino_collection)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dino_1);
    park.addDino(dino_2);
    park.addDino(dino_3);
    park.addDino(dino_4);
    const expected = dino_2;
    assert.strictEqual(expected, park.findMostGuestsDino());
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDino(dino_3);
    park.addDino(dino_4);
    park.addDino(dino_5);
    const expected = [dino_4, dino_5];
    assert.deepStrictEqual(expected, park.findDinosBySpecies('Stegosaurus'));
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDino(dino_1);
    park.addDino(dino_2);
    const expected = 500;
    assert.strictEqual(expected, park.calculateTotalVisitorsPerDay());
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDino(dino_1);
    park.addDino(dino_2);
    const expected = 182500;
    assert.strictEqual(expected, park.calculateTotalVisitorsPerYear());
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDino(dino_1);
    park.addDino(dino_2);
    const expected = 1186250;
    assert.strictEqual(expected, park.calculateYearlyRevenue());
  });

});
