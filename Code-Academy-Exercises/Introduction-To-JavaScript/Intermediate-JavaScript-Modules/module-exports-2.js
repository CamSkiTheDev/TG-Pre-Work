//My Export
const Airplane = {};

module.exports = {
    myAirplane: "CloudJet",
    displayAirplane: function () {
        return this.myAirplane;
    }
};

//My Require
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

//Learned that we can export a module directly by setting the module.exports to an object.