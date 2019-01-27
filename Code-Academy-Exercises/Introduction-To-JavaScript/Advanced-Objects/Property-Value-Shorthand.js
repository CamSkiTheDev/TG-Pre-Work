const robot = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot._energyLevel = 'high';
robot.recharge();

//Learned that we can cause unwanted side-effects when mutating a property in a object.