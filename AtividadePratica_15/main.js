const collectNumbers = require('./input');
const sortUniqueNumbers = require('./sortUniqueNumbers');

const numbers = collectNumbers();

const sortedUniqueNumbers = sortUniqueNumbers(numbers);

console.log('Números únicos ordenados:', sortedUniqueNumbers);