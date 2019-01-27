const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign(robot, { laserBlaster: true, voiceRecognition: true });

console.log(newRobot);

//Learned how to use some of the built-in-objects to grab all the keys, grab all the key-value pairs, and create a new object with addition properties.