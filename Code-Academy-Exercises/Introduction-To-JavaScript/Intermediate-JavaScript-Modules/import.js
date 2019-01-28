import Airplane from './airplane';

const displayFuelCapacity = () => {
    Airplane.availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
};

displayFuelCapacity();

//Learned how to import modules using the ES6 import keyword.