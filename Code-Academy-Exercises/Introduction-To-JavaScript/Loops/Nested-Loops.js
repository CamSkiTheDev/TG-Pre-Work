// Write your code below
const bobsFollowers = ['Liam', 'Emma', 'Noah', 'Olivia'];
const tinasFollowers = ['Emma', 'William', 'Olivia'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let x = 0; x < tinasFollowers.length; x++) {
        if (bobsFollowers[i] === tinasFollowers[x]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

//Learned how to create a nested loop and use it to compare two arrays.