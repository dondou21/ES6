function aggregateByCategory(arr) {
    let result = {};
    for({ category,value } of arr) {
        result[category] = (result[category] || 0) + value; 
    };
    
    return result;
};

const data = [
{ category: 'A', value: 10 },
{ category: 'B', value: 20 },
{ category: 'A', value: 15 },
{ category: 'C', value: 5 },
{ category: 'B', value: 25 }
];





const aggregated = aggregateByCategory(data);
console.log(aggregated);