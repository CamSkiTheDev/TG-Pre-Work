import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

const displayFuelCapacity = () => {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
};

const displayStaffStatus = () => {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + 'meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
};

displayFuelCapacity();
displayStaffStatus();

//Learned we can import specific objects from a file using their name.