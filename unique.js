/**
 * Write a function that takes a nested array of numbers and returns 
 * a new array that is flattened (one level deep) and contains only 
 * the unique numbers, in ascending order.
 */

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];

function uniqueElement(arr) {
    const newArr = arr.flat(Infinity);

    const result = [...new Set(newArr)];

    return result.sort();
  
} 

const newArr = uniqueElement(nestedArray);
console.log(newArr);