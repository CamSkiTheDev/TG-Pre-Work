const robot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();

//Learned that we can't use arrow functions when using the this keyword. This is because arrow functions bind the this keyword to the function itself.