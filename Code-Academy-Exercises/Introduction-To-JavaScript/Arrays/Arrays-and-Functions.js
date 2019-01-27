const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = newArr => newArr.pop();
removeElement(concept);
console.log(concept);

//Learned that arrays can be mutated inside a function and the array remains mutated out side of the function.