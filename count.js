/* 
Write a function that takes an array of objects, where each object has a type
property. The function should return an object where the keys are the unique 
type values, and the values are the number of occurrences of that type in 
the input array.
*/

const items = [
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'fruit' },
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'grain' },
  ];

  function count(arr) {
    let count = {};

    for(let {type} of arr) {
        count[type] = (count[type] || 0) +1 ;
    }

    return count;
  }
  
  const counts = count(items);
  console.log(counts); // Output: { fruit: 3, vegetable: 2, grain: 1 }