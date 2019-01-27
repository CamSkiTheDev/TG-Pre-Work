const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel == "number")
            return `My current energy level is ${this._energyLevel}`;
        else
            return 'System malfunction: cannot retrieve energy level';
    }
};

console.log(robot.energyLevel);


//Learned how to create a getter method and return a default value if something goes wrong.