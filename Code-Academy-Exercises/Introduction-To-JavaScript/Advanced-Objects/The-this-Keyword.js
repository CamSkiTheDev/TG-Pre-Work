const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
};

console.log(robot.provideInfo());

//Learned that we have to use the this keyword when referencing properties in the calling object when inside a functions block scope.