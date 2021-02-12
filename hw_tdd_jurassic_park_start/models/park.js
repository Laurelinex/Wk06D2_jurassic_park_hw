const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};

Park.prototype.addDino = function(dino) {
    this.dinoCollection.push(dino);
};

Park.prototype.removeDino = function(dino) {
    const indexOfDino = this.dinoCollection.indexOf(dino);
    this.dinoCollection.splice(indexOfDino, 1);
};

Park.prototype.findMostGuestsDino = function() {
    let mostGuestsDino = this.dinoCollection[0];
    for (let i = 0; i < this.dinoCollection.length; i++) {
        let dino = this.dinoCollection[i];
        let dinoGuests = dino.guestsAttractedPerDay;
        if (dinoGuests > mostGuestsDino.guestsAttractedPerDay) {
            mostGuestsDino = dino;
        }
    }
    return mostGuestsDino;
};

Park.prototype.findDinosBySpecies = function(species) {
    let newCollectionBySpecies = [];
    for (let i = 0; i < this.dinoCollection.length; i++) {
        let dino = this.dinoCollection[i];
        if (dino.species == species) {
            newCollectionBySpecies.push(dino);
        }
    }
    return newCollectionBySpecies;
};

Park.prototype.calculateTotalVisitorsPerDay = function() {
    let visitorsPerDay = 0;
    for (let i = 0; i < this.dinoCollection.length; i++) {
        let dino = this.dinoCollection[i];
        visitorsPerDay += dino.guestsAttractedPerDay;
    }
    return visitorsPerDay;
};

Park.prototype.calculateTotalVisitorsPerYear = function() {
    const averageDaysInYear = 365;
    return this.calculateTotalVisitorsPerDay() * averageDaysInYear;
};

Park.prototype.calculateYearlyRevenue = function() {
    return this.calculateTotalVisitorsPerYear() * this.ticketPrice;
};

Park.prototype.removeAllDinosBySpecies = function(species) {
    const collectionWithoutScpecies = [];
    for (let i = 0; i < this.dinoCollection.length; i++) {
        let dino = this.dinoCollection[i];
        if (dino.species != species) {
            collectionWithoutScpecies.push(dino);
        }
    }
    return collectionWithoutScpecies;
};

Park.prototype.numberOfDinosaursByDiet = function() {
    const numberOfDinosaursByDiet = {};
    for (const dino of this.dinoCollection) {
        if (numberOfDinosaursByDiet[dino.diet]) {
            numberOfDinosaursByDiet[dino.diet] += 1;
        } else {
            numberOfDinosaursByDiet[dino.diet] = 1;
        }
    }
    return numberOfDinosaursByDiet;
}

module.exports = Park;