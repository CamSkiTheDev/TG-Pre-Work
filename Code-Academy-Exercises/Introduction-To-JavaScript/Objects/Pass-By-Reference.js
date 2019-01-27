let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below
const greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil';
};

const remotelyDisable = (obj) => {
    obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

//Learned that we can mutate or add to an object using a function but can not reassign the entire object.