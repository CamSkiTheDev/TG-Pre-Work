const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    };
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

//Learned how to create a factory function that returns an object.