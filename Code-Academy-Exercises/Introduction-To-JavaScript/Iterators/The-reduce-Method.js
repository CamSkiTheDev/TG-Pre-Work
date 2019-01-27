const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log(`The value of accumlator: ${accumulator}`);
    console.log(`The value of currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 10);

console.log(newSum);

//Learned how to use the reduce method to iterate over an array and reduce the array to a single value.