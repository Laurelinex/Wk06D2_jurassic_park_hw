const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dino_collection = [];
};

Park.prototype.addDino = function(dino) {
    this.dino_collection.push(dino);
};

Park.prototype.removeDino = function(dino) {
    const indexOfDino = this.dino_collection.indexOf(dino);
    this.dino_collection.splice(indexOfDino, 1);
};

Park.prototype.findMostGuestsDino = function() {
    let most_guests_dino = this.dino_collection[0];
    for (let i = 0; i < this.dino_collection.length; i++) {
        let dino = this.dino_collection[i];
        let dino_guests = dino.guestsAttractedPerDay;
        if (dino_guests > most_guests_dino.guestsAttractedPerDay) {
            most_guests_dino = dino;
        }
    }
    return most_guests_dino;
} ;

module.exports = Park;