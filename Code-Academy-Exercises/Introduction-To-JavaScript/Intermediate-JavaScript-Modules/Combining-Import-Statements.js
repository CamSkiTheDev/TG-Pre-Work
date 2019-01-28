import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

import meetsSpeedRangeRequirements from './airplane';

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

//Learned we can also combine import statements.