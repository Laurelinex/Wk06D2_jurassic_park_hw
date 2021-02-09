const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dino_collection = [];
};

Park.prototype.addDino = function(dino) {
    this.dino_collection.push(dino);
};

module.exports = Park;