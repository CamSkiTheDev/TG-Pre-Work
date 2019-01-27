const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(luckyAnimal => {
    return luckyAnimal === 'elephant';
});

const startsWithS = animals.findIndex(otherLuckyAnimal => {
    return otherLuckyAnimal[0] === 's';
});

//Learned how to use the findIndex method to iterate over an array and find the index of an item that meet our conditions.