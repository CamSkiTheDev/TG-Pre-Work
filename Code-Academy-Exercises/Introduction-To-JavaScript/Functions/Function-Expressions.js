const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}

console.log(plantNeedsWater('Tuesday'));

//Learned how to create function expressions so the function cannot be called before it is defined.