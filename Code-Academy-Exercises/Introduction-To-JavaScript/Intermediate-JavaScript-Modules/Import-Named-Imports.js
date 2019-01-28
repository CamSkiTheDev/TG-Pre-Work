import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

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

const displaySpeedRangeStatus = () => {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
};

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

//Learned that exporting upon declaration does not have an impact on how we import the variables.