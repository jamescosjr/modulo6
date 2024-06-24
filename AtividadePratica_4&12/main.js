const getUniqueValues = require('./getUniqueValues');
const arrayElementsCollector = require('./input');

let inputArray = arrayElementsCollector();

let uniqueArray = getUniqueValues(inputArray);

console.log('Array com elementos únicos: ', uniqueArray);