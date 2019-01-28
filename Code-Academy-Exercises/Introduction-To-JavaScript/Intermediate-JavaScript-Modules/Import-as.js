import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

const displayFuelCapacity = () => {
    aircrafts.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
};

const displayStaffStatus = () => {
    aircrafts.forEach(function (element) {
        console.log(element.name + 'meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
    });
};

const displaySpeedRangeStatus = () => {
    aircrafts.forEach(function (element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
    });
};

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

//Learned we can import modules under their alias or assign them an alias when importing using the as keyword.