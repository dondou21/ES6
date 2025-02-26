
/*
Write a function that takes an array of objects, where each object 
has an id and a name property. The function should return a new object 
where the keys are the id values and the values are the corresponding 
name values.
*/

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  function transform(arr) {
    let obj = {};
    for( let {id, name} of arr) {
        obj[id]= name;
    }
    console.log(obj);
    return obj;
  };
  

//   console.log(users);
  const trans = transform(users);
  console.log(trans);
  // const transformed = transformToObject(users);
  // console.log(transformed); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }