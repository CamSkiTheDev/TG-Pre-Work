const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num == 'number') {
            if (num >= 0) {
                this._numOfSensors = num;
            } else {
                console.log('Pass in a number that is greater than or equal to 0');
            }
        }
    }
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);

//Learned how to create a setter which will set a value if the right conditions are met.